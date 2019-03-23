module.exports = {
    rules: {
        /**
         * 禁止将 await 或 yield 的结果做为运算符的后面项
         * @category Possible Errors
         * @reason 这样会导致不符合预期的结果
         */
        'require-atomic-updates': 'error'
    }
};
