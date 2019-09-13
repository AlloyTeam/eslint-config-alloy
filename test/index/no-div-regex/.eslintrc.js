module.exports = {
    rules: {
        /**
         * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
         * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
         */
        'no-div-regex': 'off'
    }
};
