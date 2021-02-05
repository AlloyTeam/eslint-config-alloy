#!/usr/bin/env node

(async function run() {
  const args = process.argv;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execute } = require('eslint/lib/cli');
  // console.log(args);
  await execute(args, null);
  process.exit(0);
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
