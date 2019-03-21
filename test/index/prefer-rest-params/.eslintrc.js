module.exports = {
    rules: {
        /**
         * 必须使用 ...args 而不是 arguments
         *
         * @category ecmascript-6
         * @reason 没必要强制要求
         */
        'prefer-rest-params': 'off'
    }
};
