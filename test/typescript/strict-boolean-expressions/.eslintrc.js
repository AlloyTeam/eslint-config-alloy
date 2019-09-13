module.exports = {
    rules: {
        /**
         * 条件判断必须传入布尔值
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/strict-boolean-expressions': 'off'
    }
};
