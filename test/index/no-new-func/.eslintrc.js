module.exports = {
    rules: {
        /**
         * 禁止使用 new Function
         * @category Best Practices
         * @reason 这和 eval 是等价的
         */
        'no-new-func': 'error'
    }
};
