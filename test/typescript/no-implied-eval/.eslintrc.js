module.exports = {
    rules: {
        /**
         * 禁止使用 eval
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-implied-eval': 'off'
    }
};
