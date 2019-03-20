module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description 必须使用 a = {b} 而不是 a = {b: b}
         * @reason 没必要强制要求
         * @fixable
         */
        'object-shorthand': 'off'
    }
};
