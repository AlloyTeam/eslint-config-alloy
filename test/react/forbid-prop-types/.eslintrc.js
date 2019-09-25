module.exports = {
    rules: {
        /**
         * 禁止使用 PropTypes.any PropTypes.array 和 PropTypes.object
         * @reason 不强制要求写 propTypes
         */
        'react/forbid-prop-types': 'off'
    }
};
