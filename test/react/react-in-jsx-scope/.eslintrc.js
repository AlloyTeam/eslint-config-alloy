module.exports = {
  rules: {
    /**
     * 出现 jsx 的地方必须导入 React
     * @reason 已经在 no-undef 中限制了
     */
    'react/react-in-jsx-scope': 'off',
  },
};
