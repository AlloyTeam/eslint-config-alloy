module.exports = {
    rules: {
        /**
         * 函数的参数必须设置为 readonly
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off'
    }
};
