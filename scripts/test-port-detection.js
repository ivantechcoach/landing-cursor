#!/usr/bin/env node

/**
 * Test script for port detection functionality
 */

const { detectPort, updateEnvFile } = require('./detect-running-port.js');

async function runTests() {
  console.log('🧪 Testing Port Detection...\n');

  // Test 1: Basic port detection
  console.log('1️⃣ Testing basic port detection:');
  try {
    const port = await detectPort();
    console.log(`   ✅ Port detected: ${port}`);
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }

  // Test 2: Environment variable detection
  console.log('\n2️⃣ Testing environment variable detection:');
  process.env.PORT = '3002';
  try {
    const port = await detectPort();
    console.log(`   ✅ Port with PORT=3002: ${port}`);
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }

  // Test 3: Reset and test default
  console.log('\n3️⃣ Testing default port:');
  delete process.env.PORT;
  try {
    const port = await detectPort();
    console.log(`   ✅ Default port: ${port}`);
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }

  console.log('\n✨ Port detection test complete!');
}

runTests().catch(console.error);
