module.exports = {
    rules: {
        /**
         * 大括号内前后禁止有空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                attributes: {
                    allowMultiline: true
                },
                children: true,
                spacing: {
                    objectLiterals: 'never'
                }
            }
        ]
    }
};
