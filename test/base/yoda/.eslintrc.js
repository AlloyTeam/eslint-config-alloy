module.exports = {
    rules: {
        /**
         * 必须使用 if (foo === 5) 而不是 if (5 === foo)
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
