module.exports = {
    rules: {
        /**
         * @memberof possible-errors
         * @description 禁止在 finally 中出现 return, throw, break 或 continue
         */
        'no-unsafe-finally': 'error'
    }
};
