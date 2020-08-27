module.exports = {
  rules: {
    /**
     * 禁止在全局作用域下定义变量或申明函数
     * @reason 模块化之后，不会出现这种在全局作用域下定义变量的情况
     */
    'no-implicit-globals': 'off',
  },
};
