module.exports = {
  rules: {
    /**
     * 禁止使用 require 来引入模块
     * @reason no-require-imports 规则已经约束了 require
     */
    '@typescript-eslint/no-var-requires': 'off',
  },
};
