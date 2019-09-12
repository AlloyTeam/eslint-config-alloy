module.exports = {
    rules: {
        /**
         * 必须使用 0b11111011 而不是 parseInt()
         * @category ECMAScript 6
         * @reason 没必要强制要求
         */
        'prefer-numeric-literals': 'off'
    }
};
