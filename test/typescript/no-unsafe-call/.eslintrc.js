module.exports = {
    rules: {
        /**
         * 禁止调用 any 类型的变量上的方法
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unsafe-call': 'off'
    }
};
