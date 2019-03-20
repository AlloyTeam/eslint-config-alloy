module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
         */
        'no-implied-eval': 'error'
    }
};
