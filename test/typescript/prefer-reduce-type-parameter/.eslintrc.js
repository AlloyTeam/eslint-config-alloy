module.exports = {
  rules: {
    /**
     * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
     */
    '@typescript-eslint/prefer-reduce-type-parameter': 'off',
  },
};
