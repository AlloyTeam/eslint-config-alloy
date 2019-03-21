module.exports = {
    rules: {
        /**
         * 禁止不必要的布尔类型转换，比如 !! 或 Boolean
         * @category possible-errors
         * @fixable
         */
        'no-extra-boolean-cast': 'error'
    }
};
