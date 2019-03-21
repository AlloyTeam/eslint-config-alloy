module.exports = {
    rules: {
        /**
         * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'no-nested-ternary': 'off'
    }
};
