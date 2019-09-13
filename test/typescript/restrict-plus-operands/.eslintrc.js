module.exports = {
    rules: {
        /**
         * 使用加号时，两者必须同为数字或同为字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-plus-operands': 'off'
    }
};
