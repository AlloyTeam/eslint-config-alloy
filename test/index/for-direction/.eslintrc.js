module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
         */
        'for-direction': 'error'
    }
};
