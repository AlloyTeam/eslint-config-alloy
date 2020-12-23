module.exports = {
  rules: {
    /**
     * 避免 <script setup> 中的变量被视为未定义
     */
    'vue/experimental-script-setup-vars': 'error',
  },
};
