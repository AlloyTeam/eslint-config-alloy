module.exports = {
  rules: {
    /**
     * 禁止在 catch 中仅仅只是把错误 throw 出去
     * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
     */
    'no-useless-catch': 'error',
  },
};
