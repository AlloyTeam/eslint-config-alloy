module.exports = {
    rules: {
        /**
         * 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
         * @category Possible Errors
         */
        'for-direction': 'error'
    }
};
