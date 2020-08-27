module.exports = {
  rules: {
    /**
     * 一个 defaultProps 必须有对应的 propTypes
     * @reason 类型相关的约束交给 TypeScript
     */
    'react/default-props-match-prop-types': 'off',
  },
};
