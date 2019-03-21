module.exports = {
    rules: {
        /**
         * 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
         * @category Best Practices
         * for (var i = 0; i < 10; i++) {
         *     (function () { return i })();
         * }
         */
        'no-loop-func': 'error'
    }
};
