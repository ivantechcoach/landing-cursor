#!/usr/bin/env node

/**
 * Advanced Port Detection Script
 * Monitors running processes to detect the actual port being used
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Detects port from running Node.js processes
 */
function detectFromRunningProcesses() {
  return new Promise((resolve) => {
    const isWindows = process.platform === 'win32';
    const command = isWindows 
      ? 'netstat -ano | findstr :300'  // Look for ports 3000-3009
      : 'lsof -i :3000-3009';

    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.warn('Could not detect running processes:', error.message);
        resolve(null);
        return;
      }

      const lines = stdout.split('\n').filter(line => line.trim());
      const ports = new Set();

      for (const line of lines) {
        if (isWindows) {
          // Windows netstat format: TCP 0.0.0.0:3001 0.0.0.0:0 LISTENING 1234
          const match = line.match(/:(\d+)\s+.*LISTENING/);
          if (match) {
            ports.add(parseInt(match[1], 10));
          }
        } else {
          // Unix lsof format: node 1234 user 21u IPv4 0x1234567890 0t0 TCP *:3001 (LISTEN)
          const match = line.match(/:(\d+)\s+\(LISTEN\)/);
          if (match) {
            ports.add(parseInt(match[1], 10));
          }
        }
      }

      // Find the most likely Next.js port (3000, 3001, etc.)
      const likelyPorts = Array.from(ports).filter(port => port >= 3000 && port <= 3010);
      const port = likelyPorts.length > 0 ? Math.min(...likelyPorts) : null;

      resolve(port);
    });
  });
}

/**
 * Detects port from environment variables
 */
function detectFromEnv() {
  const port = process.env.PORT;
  if (port) {
    const portNum = parseInt(port, 10);
    if (!isNaN(portNum) && portNum > 0 && portNum < 65536) {
      return portNum;
    }
  }
  return null;
}

/**
 * Detects port from package.json
 */
function detectFromPackageJson() {
  try {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const devScript = packageJson.scripts?.dev;
    
    if (devScript) {
      const portMatch = devScript.match(/--port\s+(\d+)/);
      if (portMatch) {
        return parseInt(portMatch[1], 10);
      }
    }
  } catch (error) {
    console.warn('Could not read package.json:', error.message);
  }
  return null;
}

/**
 * Main detection function
 */
async function detectPort() {
  console.log('🔍 Detecting running port...');

  // Try different detection methods in order of reliability
  const methods = [
    { name: 'Environment Variable', fn: detectFromEnv },
    { name: 'Running Processes', fn: detectFromRunningProcesses },
    { name: 'Package.json', fn: detectFromPackageJson },
  ];

  for (const method of methods) {
    try {
      const port = await method.fn();
      if (port) {
        console.log(`✅ Port detected: ${port} (${method.name})`);
        return port;
      }
    } catch (error) {
      console.warn(`⚠️  ${method.name} detection failed:`, error.message);
    }
  }

  // Default fallback
  console.log('ℹ️  Using default port: 3000');
  return 3000;
}

/**
 * Updates environment variables
 */
function updateEnvFile(port) {
  const projectRoot = path.join(__dirname, '..');
  const envLocalPath = path.join(projectRoot, '.env.local');
  const envExamplePath = path.join(projectRoot, 'env.example');
  
  const baseUrl = `http://localhost:${port}`;
  
  // Read existing .env.local or create from example
  let envContent = '';
  if (fs.existsSync(envLocalPath)) {
    envContent = fs.readFileSync(envLocalPath, 'utf8');
  } else if (fs.existsSync(envExamplePath)) {
    envContent = fs.readFileSync(envExamplePath, 'utf8');
  }

  // Update or add port-related variables
  const updates = {
    'PORT': port.toString(),
    'NEXT_PUBLIC_APP_URL': baseUrl,
    'NEXTAUTH_URL': baseUrl,
  };

  let updated = false;
  for (const [key, value] of Object.entries(updates)) {
    const regex = new RegExp(`^${key}=.*$`, 'm');
    if (regex.test(envContent)) {
      envContent = envContent.replace(regex, `${key}=${value}`);
      updated = true;
    } else {
      // Add the variable if it doesn't exist
      envContent += `\n${key}=${value}`;
      updated = true;
    }
  }

  // Write the updated content
  if (updated) {
    fs.writeFileSync(envLocalPath, envContent);
    console.log(`✅ Updated .env.local with port ${port}`);
  } else {
    console.log(`ℹ️  No changes needed for port ${port}`);
  }

  return baseUrl;
}

/**
 * Main function
 */
async function main() {
  try {
    const port = await detectPort();
    const baseUrl = updateEnvFile(port);
    
    console.log(`🌐 Base URL: ${baseUrl}`);
    console.log('✨ Port detection complete!');
    
    // Return the port for other scripts to use
    process.stdout.write(port.toString());
  } catch (error) {
    console.error('❌ Port detection failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { detectPort, updateEnvFile };
