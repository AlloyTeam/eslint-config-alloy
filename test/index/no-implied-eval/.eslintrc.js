module.exports = {
    rules: {
        /**
         * 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
         *
         * @category best-practices
         */
        'no-implied-eval': 'error'
    }
};
