module.exports = {
    rules: {
        /**
         * 必须使用 x = x + y 而不是 x += y
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'operator-assignment': 'off'
    }
};
