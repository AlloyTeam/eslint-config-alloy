module.exports = {
    rules: {
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-condition': 'off'
    }
};
