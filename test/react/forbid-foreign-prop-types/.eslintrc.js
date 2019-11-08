module.exports = {
    rules: {
        /**
         * 禁止使用另一个组件的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/forbid-foreign-prop-types': 'off'
    }
};
