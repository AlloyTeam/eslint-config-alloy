module.exports = {
    rules: {
        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off'
    }
};
