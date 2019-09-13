module.exports = {
    rules: {
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off'
    }
};
