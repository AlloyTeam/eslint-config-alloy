module.exports = {
    rules: {
        /**
         * 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
         * @category ECMAScript 6
         * @fixable
         */
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ]
    }
};
