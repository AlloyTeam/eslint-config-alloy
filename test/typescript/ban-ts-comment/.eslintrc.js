module.exports = {
  rules: {
    /**
     * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
     * @reason 这种注释本身就是对特殊代码的说明
     */
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
