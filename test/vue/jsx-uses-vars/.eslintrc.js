module.exports = {
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  rules: {
    /**
     * 修复 no-unused-vars 不检查 jsx 的问题
     */
    'vue/jsx-uses-vars': 'error',
  },
};
