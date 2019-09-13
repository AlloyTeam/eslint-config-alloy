module.exports = {
    rules: {
        /**
         * 使用 sort 时必须传入比较函数
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/require-array-sort-compare': 'off'
    }
};
