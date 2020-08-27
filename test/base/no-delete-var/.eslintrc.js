module.exports = {
  rules: {
    /**
     * 禁止对一个变量使用 delete
     * @reason 编译阶段就会报错了
     */
    'no-delete-var': 'off',
  },
};
