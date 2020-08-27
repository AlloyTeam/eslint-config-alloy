module.exports = {
  rules: {
    /**
     * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
     * @reason 几乎不会遇到这种场景
     */
    'no-control-regex': 'off',
  },
};
