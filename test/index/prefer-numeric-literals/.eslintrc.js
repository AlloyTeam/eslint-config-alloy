module.exports = {
    rules: {
        /**
         * @memberof ecmascript-6
         * @description @fixable 必须使用 0b11111011 而不是 parseInt('111110111', 2)
         * @off 没必要强制要求
         */
        'prefer-numeric-literals': 'off'
    }
};
