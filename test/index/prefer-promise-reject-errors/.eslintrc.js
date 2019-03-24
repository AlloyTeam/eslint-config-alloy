module.exports = {
    rules: {
        /**
         * Promise 的 reject 中必须传入 Error 对象，而不是字面量
         * @category Best Practices
         */
        'prefer-promise-reject-errors': 'error'
    }
};
