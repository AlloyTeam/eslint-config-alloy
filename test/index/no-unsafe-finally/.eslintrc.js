module.exports = {
    rules: {
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @category Possible Errors
         * @reason finally 中的语句会在 try 之前执行
         */
        'no-unsafe-finally': 'error'
    }
};
