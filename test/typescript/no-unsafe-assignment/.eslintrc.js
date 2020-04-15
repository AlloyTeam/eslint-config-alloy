module.exports = {
    rules: {
        /**
         * 禁止将变量或属性的类型设置为 any
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unsafe-assignment': 'off'
    }
};
