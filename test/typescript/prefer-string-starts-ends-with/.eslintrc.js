module.exports = {
    rules: {
        /**
         * 使用 String#startsWith 而不是其他方式
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'off'
    }
};
