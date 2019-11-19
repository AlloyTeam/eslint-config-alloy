module.exports = {
    rules: {
        /**
         * 模版字符串中的变量类型必须是字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-template-expressions': 'off'
    }
};
