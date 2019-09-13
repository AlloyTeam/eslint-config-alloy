module.exports = {
    rules: {
        /**
         * 必须使用 <></> 而不是 React.Fragment
         * @reason <></> 不需要额外引入 Fragment 组件
         */
        'react/jsx-fragments': ['error', 'syntax']
    }
};
