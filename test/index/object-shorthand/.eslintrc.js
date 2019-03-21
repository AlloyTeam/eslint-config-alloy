module.exports = {
    rules: {
        /**
         * 必须使用 a = {b} 而不是 a = {b: b}
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'object-shorthand': 'off'
    }
};
