module.exports = {
    rules: {
        /**
         * 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
         * @category possible-errors
         * @fixable
         */
        'no-extra-parens': ['error', 'functions']
    }
};
