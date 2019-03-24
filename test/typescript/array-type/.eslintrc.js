module.exports = {
    rules: {
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @category TypeScript
         * @reason 允许灵活运用两者
         * @fixable
         */
        '@typescript-eslint/array-type': 'off'
    }
};
