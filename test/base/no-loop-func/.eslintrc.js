module.exports = {
    rules: {
        /**
         * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
         * @reason 使用 let 就已经解决了这个问题了
         */
        'no-loop-func': 'off'
    }
};
