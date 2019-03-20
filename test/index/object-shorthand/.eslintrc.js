module.exports = {
    rules: {
        /**
         * @memberof ecmascript-6
         * @description @fixable 必须使用 a = {b} 而不是 a = {b: b}
         * @off 没必要强制要求
         */
        'object-shorthand': 'off'
    }
};
