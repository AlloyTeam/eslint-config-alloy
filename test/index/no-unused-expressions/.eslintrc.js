module.exports = {
    rules: {
        /**
         * 禁止无用的表达式
         */
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ]
    }
};
