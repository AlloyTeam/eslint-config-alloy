module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
         */
        'no-extra-parens': ['error', 'functions']
    }
};
