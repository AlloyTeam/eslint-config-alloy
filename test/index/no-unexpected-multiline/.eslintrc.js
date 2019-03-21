module.exports = {
    rules: {
        /**
         * 禁止出现难以理解的多行表达式，如：
         * @category Possible Errors
         * let foo = bar
         * [1, 2, 3].forEach(baz);
         */
        'no-unexpected-multiline': 'error'
    }
};
