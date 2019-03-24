module.exports = {
    rules: {
        /**
         * 必须使用 0b11111011 而不是 parseInt('111110111', 2)
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'prefer-numeric-literals': 'off'
    }
};
