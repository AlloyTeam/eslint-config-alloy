module.exports = {
    rules: {
        /**
         * @fixable jsx 的开始和闭合处禁止有空格
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
