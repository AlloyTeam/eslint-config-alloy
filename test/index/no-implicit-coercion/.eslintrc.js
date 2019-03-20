module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止使用 !! ~ 等难以理解的运算符，仅允许使用 !!
         * @fixable
         */
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!']
            }
        ]
    }
};
