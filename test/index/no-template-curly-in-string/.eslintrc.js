module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
         */
        'no-template-curly-in-string': 'error'
    }
};
