module.exports = {
  rules: {
    /**
     * 使用 as const 替代 as 'bar'
     * @reason as const 是新语法，不是很常见
     */
    '@typescript-eslint/prefer-as-const': 'off',
  },
};
