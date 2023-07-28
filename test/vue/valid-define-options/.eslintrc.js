module.exports = {
  rules: {
    /**
     * 强制执行有效的 defineOptions 编译器宏
     * @reason 可以防止错误的使用 defineOptions
     */
    'vue/valid-define-options': 'error',
  },
};
