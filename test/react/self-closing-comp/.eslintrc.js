module.exports = {
    rules: {
        /**
         * 组件内没有 children 时，必须使用自闭和写法
         * @category React
         * @reason 没必要限制
         * @fixable
         */
        'react/self-closing-comp': 'off'
    }
};
