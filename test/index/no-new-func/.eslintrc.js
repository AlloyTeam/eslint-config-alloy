module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
         */
        'no-new-func': 'error'
    }
};
