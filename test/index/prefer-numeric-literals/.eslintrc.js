module.exports = {
    rules: {
        /**
         * 必须使用 0b11111011 而不是 parseInt()
         * @reason 没必要强制要求
         */
        'prefer-numeric-literals': 'off'
    }
};
