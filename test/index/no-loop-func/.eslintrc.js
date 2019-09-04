module.exports = {
    rules: {
        /**
         * 禁止在循环内的函数中出现循环体条件语句中定义的变量
         * @category Best Practices
         * @reason 使用 let 就已经解决了这个问题了
         */
        'no-loop-func': 'off'
    }
};
