module.exports = {
    rules: {
        /**
         * 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
         * @category Best Practices
         */
        'no-new-func': 'error'
    }
};
