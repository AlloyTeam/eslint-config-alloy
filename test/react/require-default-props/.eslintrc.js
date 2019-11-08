module.exports = {
    rules: {
        /**
         * 非 required 的 prop 必须有 defaultProps
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/require-default-props': 'off'
    }
};
