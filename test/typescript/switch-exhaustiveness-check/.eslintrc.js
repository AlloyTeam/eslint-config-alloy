module.exports = {
    rules: {
        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off'
    }
};
