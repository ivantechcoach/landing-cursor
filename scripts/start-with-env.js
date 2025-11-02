#!/usr/bin/env node
const { spawn } = require('child_process');
require('dotenv').config({ path: '.env.local' });
const port = process.env.PORT || process.env.NEXT_PUBLIC_PORT || 3000;
console.log(`Starting Next.js on port ${port} ...`);
const command = `npx next start -p ${port}`;
const child = spawn(command, { stdio: 'inherit', shell: true });
child.on('exit', (code) => process.exit(code || 0));


