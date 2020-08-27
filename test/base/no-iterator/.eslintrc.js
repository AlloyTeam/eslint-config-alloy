module.exports = {
  rules: {
    /**
     * 禁止使用 __iterator__
     * @reason __iterator__ 是一个已废弃的属性
     * 使用 [Symbol.iterator] 替代它
     */
    'no-iterator': 'error',
  },
};
