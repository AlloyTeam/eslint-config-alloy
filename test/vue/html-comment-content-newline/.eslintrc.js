module.exports = {
  rules: {
    /**
     * HTML 注释的 <!-- 后必须有空格或换行符
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/html-comment-content-newline': 'off',
  },
};
