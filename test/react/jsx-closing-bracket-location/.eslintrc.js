module.exports = {
    rules: {
        /**
         * 自闭和标签的反尖括号必须与尖括号的那一行对齐
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: false,
                selfClosing: 'line-aligned'
            }
        ]
    }
};
