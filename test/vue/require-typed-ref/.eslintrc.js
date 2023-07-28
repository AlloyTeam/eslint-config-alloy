module.exports = {
  rules: {
    /**
     * 要求 ref 和 shallowRef 函数需要强制类型化
     * @reason 需要 ts 支持
     */
    'vue/require-typed-ref': 'off',
  },
};
