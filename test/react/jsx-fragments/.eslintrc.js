module.exports = {
    rules: {
        /**
         * 必须使用 React.Fragment 而不是 <></>
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-fragments': ['error', 'element']
    }
};
