module.exports = {
    rules: {
        /**
         * 方法调用时需要绑定到正确的 this 上
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/unbound-method': 'off'
    }
};
