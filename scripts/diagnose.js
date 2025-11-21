#!/usr/bin/env node

/**
 * Diagnostic Script
 * Helps identify why the development server might not be starting
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.join(__dirname, '..');

console.log('🔍 Diagnóstico del Proyecto\n');
console.log('='.repeat(60));

// 1. Check Node.js version
console.log('\n1️⃣ Verificando Node.js...');
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf-8' }).trim();
  console.log(`   ✅ Node.js: ${nodeVersion}`);
  const majorVersion = parseInt(nodeVersion.replace('v', '').split('.')[0]);
  if (majorVersion < 18) {
    console.log(`   ⚠️  Advertencia: Se recomienda Node.js 18+`);
  }
} catch (error) {
  console.log('   ❌ Node.js no encontrado');
}

// 2. Check pnpm
console.log('\n2️⃣ Verificando pnpm...');
try {
  const pnpmVersion = execSync('pnpm --version', { encoding: 'utf-8' }).trim();
  console.log(`   ✅ pnpm: ${pnpmVersion}`);
} catch (error) {
  console.log('   ❌ pnpm no encontrado. Instala con: npm install -g pnpm');
}

// 3. Check node_modules
console.log('\n3️⃣ Verificando dependencias...');
const nodeModulesPath = path.join(projectRoot, 'node_modules');
if (fs.existsSync(nodeModulesPath)) {
  console.log('   ✅ node_modules existe');
  
  // Check if Next.js is installed
  const nextPath = path.join(nodeModulesPath, 'next');
  if (fs.existsSync(nextPath)) {
    try {
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(nextPath, 'package.json'), 'utf-8')
      );
      console.log(`   ✅ Next.js instalado: ${packageJson.version}`);
    } catch (error) {
      console.log('   ⚠️  Next.js encontrado pero no se pudo leer la versión');
    }
  } else {
    console.log('   ❌ Next.js no encontrado en node_modules');
    console.log('   💡 Ejecuta: pnpm install');
  }
} else {
  console.log('   ❌ node_modules no existe');
  console.log('   💡 Ejecuta: pnpm install');
}

// 4. Check package.json
console.log('\n4️⃣ Verificando package.json...');
const packageJsonPath = path.join(projectRoot, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('   ✅ package.json existe');
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    console.log(`   ✅ Nombre del proyecto: ${packageJson.name}`);
    console.log(`   ✅ Versión: ${packageJson.version}`);
  } catch (error) {
    console.log('   ❌ Error al leer package.json:', error.message);
  }
} else {
  console.log('   ❌ package.json no existe');
}

// 5. Check Next.js config
console.log('\n5️⃣ Verificando configuración de Next.js...');
const nextConfigPath = path.join(projectRoot, 'next.config.js');
if (fs.existsSync(nextConfigPath)) {
  console.log('   ✅ next.config.js existe');
} else {
  console.log('   ⚠️  next.config.js no existe (puede ser opcional)');
}

// 6. Check TypeScript config
console.log('\n6️⃣ Verificando TypeScript...');
const tsConfigPath = path.join(projectRoot, 'tsconfig.json');
if (fs.existsSync(tsConfigPath)) {
  console.log('   ✅ tsconfig.json existe');
} else {
  console.log('   ⚠️  tsconfig.json no existe');
}

// 7. Check port availability
console.log('\n7️⃣ Verificando puerto 3000...');
const net = require('net');
function checkPort(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.listen(port, () => {
      server.once('close', () => resolve(true));
      server.close();
    });
    server.on('error', () => resolve(false));
  });
}

checkPort(3000).then((available) => {
  if (available) {
    console.log('   ✅ Puerto 3000 disponible');
  } else {
    console.log('   ⚠️  Puerto 3000 está en uso');
    console.log('   💡 Intenta usar otro puerto o mata el proceso que lo está usando');
  }
  
  // 8. Check for running Node processes
  console.log('\n8️⃣ Verificando procesos Node.js...');
  try {
    if (process.platform === 'win32') {
      const processes = execSync('tasklist /FI "IMAGENAME eq node.exe"', { encoding: 'utf-8' });
      const count = (processes.match(/node\.exe/g) || []).length;
      if (count > 0) {
        console.log(`   ⚠️  Hay ${count} proceso(s) Node.js corriendo`);
        console.log('   💡 Puede que haya un servidor ya iniciado');
      } else {
        console.log('   ✅ No hay procesos Node.js corriendo');
      }
    } else {
      const processes = execSync('ps aux | grep node | grep -v grep', { encoding: 'utf-8' });
      if (processes.trim()) {
        console.log('   ⚠️  Hay procesos Node.js corriendo');
      } else {
        console.log('   ✅ No hay procesos Node.js corriendo');
      }
    }
  } catch (error) {
    console.log('   ⚠️  No se pudo verificar procesos');
  }
  
  // 9. Check .next directory
  console.log('\n9️⃣ Verificando build...');
  const nextBuildPath = path.join(projectRoot, '.next');
  if (fs.existsSync(nextBuildPath)) {
    console.log('   ✅ Directorio .next existe (hay un build previo)');
  } else {
    console.log('   ℹ️  Directorio .next no existe (normal si no has hecho build)');
  }
  
  // 10. Summary and recommendations
  console.log('\n' + '='.repeat(60));
  console.log('📋 Resumen y Recomendaciones\n');
  
  if (!fs.existsSync(nodeModulesPath)) {
    console.log('❌ PROBLEMA PRINCIPAL: node_modules no existe');
    console.log('   💡 Solución: Ejecuta "pnpm install"');
  } else if (!fs.existsSync(path.join(nodeModulesPath, 'next'))) {
    console.log('❌ PROBLEMA PRINCIPAL: Next.js no está instalado');
    console.log('   💡 Solución: Ejecuta "pnpm install"');
  } else if (!available) {
    console.log('⚠️  PROBLEMA: Puerto 3000 está ocupado');
    console.log('   💡 Soluciones:');
    console.log('      - Usa otro puerto: pnpm dev:direct -- -p 3001');
    console.log('      - Mata el proceso: En Windows: taskkill /F /IM node.exe');
  } else {
    console.log('✅ Todo parece estar bien configurado');
    console.log('   💡 Intenta iniciar el servidor con:');
    console.log('      - pnpm dev:direct (más simple)');
    console.log('      - pnpm dev:cursor:simple (para Cursor)');
    console.log('      - pnpm dev (completo)');
  }
  
  console.log('\n' + '='.repeat(60));
});





