#!/usr/bin/env node

/**
 * Kill Node.js Processes Script
 * Kills all Node.js processes to free up ports
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔍 Buscando procesos Node.js...\n');

try {
  if (process.platform === 'win32') {
    // Windows
    const processes = execSync('tasklist /FI "IMAGENAME eq node.exe" /FO CSV', { encoding: 'utf-8' });
    const lines = processes.split('\n').filter(line => line.includes('node.exe'));
    
    if (lines.length <= 1) {
      console.log('✅ No hay procesos Node.js corriendo');
      process.exit(0);
    }
    
    console.log(`⚠️  Encontrados ${lines.length - 1} proceso(s) Node.js:\n`);
    
    const pids = [];
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header
      const match = line.match(/"([^"]+)"/g);
      if (match && match.length > 1) {
        const pid = match[1].replace(/"/g, '');
        const name = match[0].replace(/"/g, '');
        console.log(`   PID: ${pid} - ${name}`);
        pids.push(pid);
      }
    });
    
    if (pids.length === 0) {
      console.log('✅ No hay procesos para matar');
      process.exit(0);
    }
    
    rl.question('\n❓ ¿Quieres matar todos estos procesos? (s/n): ', (answer) => {
      if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'y' || answer.toLowerCase() === 'si') {
        console.log('\n🛑 Matando procesos...\n');
        pids.forEach(pid => {
          try {
            execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
            console.log(`   ✅ Proceso ${pid} terminado`);
          } catch (error) {
            console.log(`   ⚠️  No se pudo terminar proceso ${pid}`);
          }
        });
        console.log('\n✅ Procesos terminados. Ahora puedes iniciar el servidor.');
      } else {
        console.log('\n❌ Operación cancelada');
      }
      rl.close();
    });
  } else {
    // Unix/Linux/Mac
    const processes = execSync('ps aux | grep node | grep -v grep', { encoding: 'utf-8' });
    
    if (!processes.trim()) {
      console.log('✅ No hay procesos Node.js corriendo');
      process.exit(0);
    }
    
    console.log('⚠️  Procesos Node.js encontrados:\n');
    console.log(processes);
    
    rl.question('\n❓ ¿Quieres matar todos estos procesos? (s/n): ', (answer) => {
      if (answer.toLowerCase() === 's' || answer.toLowerCase() === 'y' || answer.toLowerCase() === 'si') {
        console.log('\n🛑 Matando procesos...\n');
        try {
          execSync('pkill -f node', { stdio: 'inherit' });
          console.log('\n✅ Procesos terminados. Ahora puedes iniciar el servidor.');
        } catch (error) {
          console.log('\n⚠️  Error al matar procesos:', error.message);
        }
      } else {
        console.log('\n❌ Operación cancelada');
      }
      rl.close();
    });
  }
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}





