module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止无用的表达式
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
