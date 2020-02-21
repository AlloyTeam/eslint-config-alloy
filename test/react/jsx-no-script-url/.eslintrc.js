module.exports = {
    rules: {
        /**
         * 禁止出现 href="javascript:void(0)"
         * @reason React 已经有 warning 了，并且会在将来禁止此类属性值
         */
        'react/jsx-no-script-url': 'error'
    }
};
