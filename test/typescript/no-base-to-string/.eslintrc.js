module.exports = {
    rules: {
        /**
         * 禁止滥用 toString 方法
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-base-to-string': 'off'
    }
};
