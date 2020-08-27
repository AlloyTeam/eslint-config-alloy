module.exports = {
  rules: {
    /**
     * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
     * @reason 类型相关的约束交给 TypeScript
     */
    'react/boolean-prop-naming': 'off',
  },
};
