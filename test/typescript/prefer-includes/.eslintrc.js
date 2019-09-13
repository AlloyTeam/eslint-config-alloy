module.exports = {
    rules: {
        /**
         * 使用 includes 而不是 indexOf
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-includes': 'off'
    }
};
