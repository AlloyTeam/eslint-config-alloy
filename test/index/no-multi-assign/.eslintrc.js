module.exports = {
    rules: {
        /**
         * 禁止连续赋值，比如 a = b = c = 5
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'no-multi-assign': 'off'
    }
};
