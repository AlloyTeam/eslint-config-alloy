module.exports = {
    rules: {
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @category Possible Errors
         */
        'no-unsafe-finally': 'error'
    }
};
