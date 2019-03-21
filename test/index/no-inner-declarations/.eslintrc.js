module.exports = {
    rules: {
        /**
         * 禁止在 if 代码块内出现函数声明
         * @category possible-errors
         */
        'no-inner-declarations': ['error', 'both']
    }
};
