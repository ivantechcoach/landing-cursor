#!/usr/bin/env node

/**
 * Port Setup Script
 * Automatically detects and sets the port for the development server
 */

const fs = require('fs');
const path = require('path');
const net = require('net');

// Get the project root directory
const projectRoot = path.join(__dirname, '..');
const envLocalPath = path.join(projectRoot, '.env.local');
const envExamplePath = path.join(projectRoot, 'env.example');

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
 * Finds an available port starting from a base port
 */
async function findAvailablePort(startPort = 3000) {
  for (let port = startPort; port <= startPort + 10; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error('No available ports found');
}

/**
 * Detects the port from various sources
 */
async function detectPort() {
  // 1. Check PORT environment variable
  if (process.env.PORT) {
    const port = parseInt(process.env.PORT, 10);
    if (!isNaN(port) && port > 0 && port < 65536) {
      if (await isPortAvailable(port)) {
        return { port, source: 'env' };
      } else {
        console.warn(`⚠️  Port ${port} from environment is not available, finding alternative...`);
      }
    }
  }

  // 2. Check package.json dev script
  try {
    const packageJsonPath = path.join(projectRoot, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const devScript = packageJson.scripts?.dev;
    
    if (devScript) {
      const portMatch = devScript.match(/--port\s+(\d+)/);
      if (portMatch) {
        const port = parseInt(portMatch[1], 10);
        if (await isPortAvailable(port)) {
          return { port, source: 'package' };
        } else {
          console.warn(`⚠️  Port ${port} from package.json is not available, finding alternative...`);
        }
      }
    }
  } catch (error) {
    console.warn('Could not read package.json:', error.message);
  }

  // 3. Find available port starting from 3000
  try {
    const port = await findAvailablePort(3000);
    return { port, source: 'auto' };
  } catch (error) {
    console.error('Error finding available port:', error.message);
    return { port: 3000, source: 'fallback' };
  }
}

/**
 * Updates environment variables with the detected port
 */
function updateEnvFile(port) {
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
}

/**
 * Main function
 */
async function main() {
  console.log('🔍 Detecting port...');
  
  const { port, source } = await detectPort();
  
  console.log(`📍 Detected port: ${port} (source: ${source})`);
  console.log(`🌐 Base URL: http://localhost:${port}`);
  
  updateEnvFile(port);
  
  console.log('✨ Port setup complete!');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { detectPort, updateEnvFile };
