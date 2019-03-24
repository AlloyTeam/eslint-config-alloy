module.exports = {
    rules: {
        /**
         * 禁止直接使用别的组建的 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/forbid-foreign-prop-types': 'off'
    }
};
