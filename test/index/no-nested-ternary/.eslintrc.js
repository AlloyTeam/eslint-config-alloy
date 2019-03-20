module.exports = {
    rules: {
        /**
         * @category stylistic-issues
         * @description 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
         * @reason 没必要限制
         */
        'no-nested-ternary': 'off'
    }
};
