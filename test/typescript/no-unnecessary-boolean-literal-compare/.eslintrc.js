module.exports = {
    rules: {
        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off'
    }
};
