module.exports = {
  rules: {
    /**
     * 接口中的方法必须用属性的方式定义
     * @reason 配置了 strictFunctionTypes 之后，用属性的方式定义方法可以获得更严格的检查
     */
    '@typescript-eslint/method-signature-style': 'error',
  },
};
