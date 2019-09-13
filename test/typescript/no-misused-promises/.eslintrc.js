module.exports = {
    rules: {
        /**
         * 避免错误的使用 Promise
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-misused-promises': 'off'
    }
};
