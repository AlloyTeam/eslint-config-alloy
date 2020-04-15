module.exports = {
    rules: {
        /**
         * 禁止函数的返回值的类型是 any
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unsafe-return': 'off'
    }
};
