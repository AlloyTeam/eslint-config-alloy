module.exports = {
    rules: {
        /**
         * @memberof ecmascript-6
         * @description @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
         */
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ]
    }
};
