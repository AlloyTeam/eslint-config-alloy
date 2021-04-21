module.exports = {
  rules: {
    /**
     * 禁止调用 Vue.nextTick 或 vm.$nextTick 时不使用 await
     */
    'vue/valid-next-tick': 'error',
  },
};
