module.exports = {
  rules: {
    /**
     * 重载的函数必须写在一起
     * @reason 增加可读性
     */
    '@typescript-eslint/adjacent-overload-signatures': 'error',
  },
};
