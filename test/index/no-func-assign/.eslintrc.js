module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description 禁止将一个函数声明重新赋值，如：
         * function foo() {}
         * foo = bar
         */
        'no-func-assign': 'error'
    }
};
