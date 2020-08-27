module.exports = {
  rules: {
    /**
     * 禁止使用 PropTypes.any PropTypes.array 和 PropTypes.object
     * @reason 类型相关的约束交给 TypeScript
     */
    'react/forbid-prop-types': 'off',
  },
};
