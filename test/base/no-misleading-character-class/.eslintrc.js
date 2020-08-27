module.exports = {
  rules: {
    /**
     * 禁止正则表达式中使用肉眼无法区分的特殊字符
     * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
     */
    'no-misleading-character-class': 'error',
  },
};
