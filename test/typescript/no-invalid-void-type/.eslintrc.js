module.exports = {
    rules: {
        /**
         * 禁止使用无意义的 void 类型
         * @reason void 只能用在函数的返回值中
         */
        '@typescript-eslint/no-invalid-void-type': 'error'
    }
};
