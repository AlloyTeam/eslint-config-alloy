module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 必须使用 if (foo === 5) 而不是 if (5 === foo)
         * @fixable
         */
        yoda: [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ]
    }
};
