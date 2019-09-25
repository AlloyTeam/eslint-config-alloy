module.exports = {
    rules: {
        /**
         * 数组中的 jsx 必须有 key
         */
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true
            }
        ]
    }
};
