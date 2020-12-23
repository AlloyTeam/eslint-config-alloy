module.exports = {
  rules: {
    /**
     * 禁止在字符串中使用 \8 \9
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'no-nonoctal-decimal-escape': 'off',
  },
};
