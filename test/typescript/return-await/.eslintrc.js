module.exports = {
    rules: {
        /**
         * async 函数必须返回 await
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/return-await': 'off'
    }
};
