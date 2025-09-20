#!/usr/bin/env node

/**
 * Clean Restart Script
 * Kills existing processes and cleans up for a fresh start
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

/**
 * Kills processes on common development ports
 */
function killPortProcesses() {
  return new Promise((resolve) => {
    const ports = [3000, 3001, 3002, 3003, 3004, 3005];
    let completed = 0;
    
    ports.forEach(port => {
      exec(`netstat -ano | findstr :${port}`, (error, stdout) => {
        if (stdout) {
          const lines = stdout.trim().split('\n');
          lines.forEach(line => {
            const parts = line.trim().split(/\s+/);
            if (parts.length >= 5) {
              const pid = parts[4];
              if (pid && pid !== '0') {
                exec(`taskkill /PID ${pid} /F`, (killError) => {
                  if (!killError) {
                    console.log(`✅ Killed process ${pid} on port ${port}`);
                  }
                });
              }
            }
          });
        }
        completed++;
        if (completed === ports.length) {
          resolve();
        }
      });
    });
  });
}

/**
 * Cleans up build artifacts
 */
function cleanBuildArtifacts() {
  const artifacts = [
    '.next',
    'node_modules/.cache',
    '.env.local',
    'dist',
    'build'
  ];
  
  artifacts.forEach(artifact => {
    const artifactPath = path.join(projectRoot, artifact);
    if (fs.existsSync(artifactPath)) {
      try {
        fs.rmSync(artifactPath, { recursive: true, force: true });
        console.log(`✅ Cleaned ${artifact}`);
      } catch (error) {
        console.warn(`⚠️  Could not clean ${artifact}: ${error.message}`);
      }
    }
  });
}

/**
 * Main function
 */
async function main() {
  console.log('🧹 Starting clean restart...');
  
  console.log('🔪 Killing existing processes...');
  await killPortProcesses();
  
  console.log('🗑️  Cleaning build artifacts...');
  cleanBuildArtifacts();
  
  console.log('✨ Clean restart complete!');
  console.log('💡 You can now run: pnpm run dev');
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { killPortProcesses, cleanBuildArtifacts };
