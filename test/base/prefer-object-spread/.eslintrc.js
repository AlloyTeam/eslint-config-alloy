module.exports = {
  rules: {
    /**
     * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
     */
    'prefer-object-spread': 'error',
  },
};
