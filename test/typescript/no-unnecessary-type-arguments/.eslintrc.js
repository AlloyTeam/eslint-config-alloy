module.exports = {
    rules: {
        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off'
    }
};
