import { ESLint } from 'eslint';

const eslintInstance = new ESLint({});

main();
async function main() {
  const results = await eslintInstance.lintFiles(['./test/index/no-cond-assign/bad.js']);
  console.log(results[0].messages);
}
