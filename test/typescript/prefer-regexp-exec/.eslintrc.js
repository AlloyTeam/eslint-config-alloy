module.exports = {
    rules: {
        /**
         * 使用 RegExp#exec 而不是 String#match
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-regexp-exec': 'off'
    }
};
