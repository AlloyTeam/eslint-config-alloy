module.exports = {
    rules: {
        /**
         * 必须使用模版字符串而不是字符串连接
         * @category ECMAScript 6
         * @reason 字符串连接很常用
         * @fixable
         */
        'prefer-template': 'off'
    }
};
