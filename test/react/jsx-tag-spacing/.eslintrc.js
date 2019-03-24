module.exports = {
    rules: {
        /**
         * jsx 的开始和闭合处禁止有空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ]
    }
};
