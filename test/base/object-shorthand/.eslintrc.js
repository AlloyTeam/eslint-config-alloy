module.exports = {
  rules: {
    /**
     * 必须使用 a = {b} 而不是 a = {b: b}
     * @reason 有时后者可以使代码结构更清晰
     */
    'object-shorthand': 'off',
  },
};
