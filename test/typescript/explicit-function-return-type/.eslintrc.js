module.exports = {
  rules: {
    /**
     * 函数返回值必须与声明的类型一致
     * @reason 返回值类型可以推导出来
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
