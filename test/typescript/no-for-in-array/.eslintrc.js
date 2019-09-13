module.exports = {
    rules: {
        /**
         * 禁止对 array 使用 for in 循环
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-for-in-array': 'off'
    }
};
