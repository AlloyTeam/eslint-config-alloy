module.exports = {
    rules: {
        /**
         * 将 var 定义的变量视为块作用域，禁止在块外使用
         * @category Best Practices
         * @reason 已经禁止使用 var 了
         */
        'block-scoped-var': 'off'
    }
};
