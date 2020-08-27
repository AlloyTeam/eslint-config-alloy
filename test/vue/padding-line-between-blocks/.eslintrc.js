module.exports = {
  rules: {
    /**
     * <template> <script> <style> 之间必须由空行
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/padding-line-between-blocks': 'off',
  },
};
