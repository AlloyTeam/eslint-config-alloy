module.exports = {
  rules: {
    /**
     * 禁止有 v-html 或 v-text 属性的标签内部还有内容
     */
    'vue/no-child-content': 'error',
  },
};
