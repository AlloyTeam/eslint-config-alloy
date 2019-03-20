module.exports = {
    rules: {
        /**
         * @memberof
         * @description @fixable 大括号内前后禁止有空格
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
