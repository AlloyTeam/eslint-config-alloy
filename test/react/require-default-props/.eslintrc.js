module.exports = {
    rules: {
        /**
         * 非 required 的 prop 必须有 defaultProps
         * @reason 不强制要求写 propTypes
         */
        'react/require-default-props': 'off'
    }
};
