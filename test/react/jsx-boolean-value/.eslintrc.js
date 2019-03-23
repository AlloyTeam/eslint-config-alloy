module.exports = {
    rules: {
        /**
         * 布尔值的属性必须显式的写 someprop={true}
         * @category JSX-specific
         * @reason 没必要限制
         * @fixable
         */
        'react/jsx-boolean-value': 'off'
    }
};
