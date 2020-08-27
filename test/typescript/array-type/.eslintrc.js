module.exports = {
  rules: {
    /**
     * 限制数组类型必须使用 Array<T> 或 T[]
     * @reason 允许灵活运用两者
     */
    '@typescript-eslint/array-type': 'off',
  },
};
