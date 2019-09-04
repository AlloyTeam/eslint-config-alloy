module.exports = {
    rules: {
        /**
         * 禁止使用 __iterator__
         * @category Best Practices
         * @reason __iterator__ 是一个已废弃的属性
         */
        'no-iterator': 'error'
    }
};
