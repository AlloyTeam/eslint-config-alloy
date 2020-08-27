module.exports = {
  rules: {
    /**
     * 枚举类型的值必须是字面量，禁止是计算值
     * @reason 编译阶段检查就足够了
     */
    '@typescript-eslint/prefer-literal-enum-member': 'off',
  },
};
