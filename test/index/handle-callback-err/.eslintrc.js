module.exports = {
    rules: {
        /**
         * callback 中的 err 必须被处理
         * @reason 它是通过字符串匹配来判断函数参数 err 的，不准确
         */
        'handle-callback-err': 'off'
    }
};
