module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
         * @fixable
         */
        'no-extra-parens': ['error', 'functions']
    }
};
