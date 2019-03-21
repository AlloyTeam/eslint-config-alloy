module.exports = {
    rules: {
        /**
         * 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
         *
         * @category best-practices
         */
        'no-new-func': 'error'
    }
};
