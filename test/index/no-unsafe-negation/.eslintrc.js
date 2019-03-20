module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
         */
        'no-unsafe-negation': 'error'
    }
};
