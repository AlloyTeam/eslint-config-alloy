module.exports = {
    rules: {
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         * @category possible-errors
         */
        'use-isnan': 'error'
    }
};
