module.exports = {
    rules: {
        /**
         * 禁止无用的表达式
         */
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ]
    }
};
