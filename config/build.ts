/* eslint-disable @typescript-eslint/no-require-imports */
import pkg from '../package.json';

export const NAMESPACE_CONFIG = {
  base: {
    /** bad.js good.js 的后缀 */
    exampleExtension: 'js',
    /** Prism 语言设置 */
    prismLanguage: 'js',
    /** 插件前缀 */
    rulePrefix: '',
    /** 规则配置 */
    ruleConfig: require('./rules/base.json'),
    /** 各插件的文档地址 */
    getDocsUrl: (rule: string) => `https://eslint.org/docs/rules/${rule}`,
    /** 插件的名称 */
    pluginName: undefined,
  },
  react: {
    exampleExtension: 'js',
    prismLanguage: 'jsx',
    rulePrefix: 'react/',
    ruleConfig: require('./rules/react.json'),
    getDocsUrl: (rule: string) =>
      `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${rule.replace(/.*\//, '')}.md`,
    pluginName: 'eslint-plugin-react',
  },
  vue: {
    exampleExtension: 'vue',
    prismLanguage: 'html',
    rulePrefix: 'vue/',
    ruleConfig: require('./rules/vue.json'),
    getDocsUrl: (rule: string) => `https://eslint.vuejs.org/rules/${rule.replace(/.*\//, '')}.html`,
    pluginName: 'eslint-plugin-vue',
  },
  typescript: {
    exampleExtension: 'ts',
    prismLanguage: 'ts',
    rulePrefix: '@typescript-eslint/',
    ruleConfig: require('./rules/typescript.json'),
    getDocsUrl: (rule: string) =>
      `https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/${rule.replace(
        /.*\//,
        '',
      )}.md`,
    pluginName: '@typescript-eslint/eslint-plugin',
  },
};

export type Namespace = keyof typeof NAMESPACE_CONFIG;
export const NAMESPACES = Object.keys(NAMESPACE_CONFIG) as Namespace[];

/** 写入 eslintrc 中的元信息 */
export function buildEslintrcMeta() {
  return `
/**
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * 贡献者：
 *   ${pkg.author}
 *   ${pkg.contributors.join('\n *   ')}
 *
 * 依赖版本：
 *   ${[
   'eslint',
   'babel-eslint',
   'eslint-plugin-react',
   'vue-eslint-parser',
   'eslint-plugin-vue',
   '@typescript-eslint/parser',
   '@typescript-eslint/eslint-plugin',
 ]
   .map((key) => `${key} ${(pkg as any).devDependencies[key]}`)
   .join('\n *   ')}
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
`;
}
