module.exports = {
  rules: {
    /**
     * 禁止使用八进制的转义符
     * @reason 编译阶段就会报错了
     */
    'no-octal-escape': 'off',
  },
};
