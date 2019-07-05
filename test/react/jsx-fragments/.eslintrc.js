module.exports = {
    rules: {
        /**
         * 必须使用 <></> 而不是 React.Fragment
         * @category JSX-specific
         * @fixable
         * @reason <></> 不需要额外引入 Fragment 组件
         */
        'react/jsx-fragments': ['error', 'syntax']
    }
};
