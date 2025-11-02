#!/usr/bin/env node

/**
 * Development Script for Cursor Browser
 * Starts Next.js dev server and provides URL for Cursor's internal browser
 */

const { spawn } = require('child_process');
const path = require('path');
const net = require('net');
const fs = require('fs');

const projectRoot = path.join(__dirname, '..');
const PORT = process.env.PORT || 3000;

/**
 * Checks if a port is available
 */
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    
    server.listen(port, () => {
      server.once('close', () => {
        resolve(true);
      });
      server.close();
    });
    
    server.on('error', () => {
      resolve(false);
    });
  });
}

/**
 * Waits for the server to be ready by checking if port is in use
 */
async function waitForServer(port, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    const available = await isPortAvailable(port);
    if (!available) {
      // Port is in use, server is ready
      return true;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return false;
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Iniciando servidor de desarrollo para Cursor...\n');
  
  let port = PORT;
  
  // Try to setup port first
  try {
    // Check if setup-port script exists
    const setupPortPath = path.join(__dirname, 'setup-port.js');
    if (fs.existsSync(setupPortPath)) {
      const { detectPort } = require('./setup-port.js');
      const result = await detectPort();
      port = result.port || PORT;
      console.log(`📍 Puerto detectado: ${port} (fuente: ${result.source || 'auto'})`);
    } else {
      console.log(`📍 Usando puerto por defecto: ${port}`);
    }
  } catch (error) {
    console.warn(`⚠️  No se pudo detectar puerto automáticamente: ${error.message}`);
    console.log(`📍 Usando puerto por defecto: ${port}`);
  }

  const url = `http://localhost:${port}`;

  console.log('\n' + '='.repeat(60));
  console.log('🌐 Servidor de desarrollo Next.js');
  console.log('='.repeat(60));
  console.log(`\n📡 URL: ${url}`);
  console.log(`\n💡 Para abrir en el navegador de Cursor:`);
  console.log(`   1. Espera a que el servidor esté listo (verás "Ready")`);
  console.log(`   2. Copia esta URL: ${url}`);
  console.log(`   3. Abre el navegador interno de Cursor`);
  console.log(`   4. Pega la URL en la barra de direcciones\n`);
  console.log('='.repeat(60) + '\n');

  // Check if node_modules exists
  const nodeModulesPath = path.join(projectRoot, 'node_modules');
  if (!fs.existsSync(nodeModulesPath)) {
    console.error('❌ Error: node_modules no encontrado. Por favor ejecuta: pnpm install');
    process.exit(1);
  }

  // Start Next.js dev server
  console.log('⏳ Iniciando servidor Next.js...\n');
  
  // Use npx.cmd on Windows for better compatibility
  const isWindows = process.platform === 'win32';
  const command = isWindows ? 'npx.cmd' : 'npx';
  const args = ['next', 'dev', '--port', port.toString()];
  
  const nextDev = spawn(command, args, {
    cwd: projectRoot,
    stdio: 'inherit',
    shell: false, // Don't use shell on Windows to avoid PowerShell issues
    env: {
      ...process.env,
      PORT: port.toString(),
    },
  });

  // Handle errors from the spawned process
  nextDev.on('error', (error) => {
    console.error('\n❌ Error al iniciar el servidor:', error.message);
    if (error.message.includes('ENOENT')) {
      console.error('💡 Asegúrate de que Next.js esté instalado. Ejecuta: pnpm install');
    }
    process.exit(1);
  });

  // Wait a bit for server to start and then check
  setTimeout(async () => {
    const ready = await waitForServer(port);
    if (ready) {
      console.log(`\n✅ Servidor listo en ${url}`);
      console.log(`\n🎯 Abre esta URL en el navegador interno de Cursor AI: ${url}\n`);
    } else {
      console.log(`\n⏳ Esperando que el servidor esté listo...`);
    }
  }, 5000);

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n\n🛑 Deteniendo servidor...');
    if (nextDev && !nextDev.killed) {
      nextDev.kill('SIGINT');
    }
    setTimeout(() => {
      process.exit(0);
    }, 1000);
  });

  process.on('SIGTERM', () => {
    if (nextDev && !nextDev.killed) {
      nextDev.kill('SIGTERM');
    }
    process.exit(0);
  });

  nextDev.on('exit', (code) => {
    if (code !== 0 && code !== null) {
      console.error(`\n❌ El servidor se detuvo con código: ${code}`);
    }
    process.exit(code || 0);
  });
}

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Error fatal:', error.message);
    if (error.stack) {
      console.error('\nStack trace:', error.stack);
    }
    process.exit(1);
  });
}

module.exports = { main };

