#!/usr/bin/env node

/**
 * Simple Development Script for Cursor Browser
 * Simplified version that just runs next dev
 */

const { spawn } = require('child_process');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const port = process.env.PORT || 3000;
const url = `http://localhost:${port}`;

console.log('🚀 Iniciando servidor Next.js para Cursor...\n');
console.log('='.repeat(60));
console.log(`📡 URL: ${url}`);
console.log('='.repeat(60));
console.log('\n💡 Cuando veas "Ready", abre esta URL en el navegador de Cursor:\n');
console.log(`   ${url}\n`);
console.log('='.repeat(60) + '\n');

// Use next dev directly - most reliable method
// Check if we're on Windows and use the appropriate command
const isWindows = process.platform === 'win32';
const command = isWindows ? 'npx.cmd' : 'npx';
const args = ['next', 'dev', '--port', port.toString()];

const child = spawn(command, args, {
  cwd: projectRoot,
  stdio: 'inherit',
  shell: false, // Don't use shell to avoid PowerShell issues
  env: {
    ...process.env,
    PORT: port.toString(),
  },
});

// Handle termination
process.on('SIGINT', () => {
  console.log('\n\n🛑 Deteniendo servidor...');
  if (child && !child.killed) {
    child.kill('SIGINT');
  }
  setTimeout(() => process.exit(0), 1000);
});

process.on('SIGTERM', () => {
  if (child && !child.killed) {
    child.kill('SIGTERM');
  }
  process.exit(0);
});

child.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error(`\n❌ El servidor se detuvo con código: ${code}`);
  }
  process.exit(code || 0);
});

