module.exports = {
    rules: {
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @category possible-errors
         */
        'no-unsafe-finally': 'error'
    }
};
