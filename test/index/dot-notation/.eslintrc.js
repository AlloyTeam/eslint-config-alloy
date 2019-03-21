module.exports = {
    rules: {
        /**
         * 禁止出现 foo['bar']，必须写成 foo.bar
         * @category Best Practices
         * @reason 当需要写一系列属性的时候，可以更统一
         * @fixable
         */
        'dot-notation': 'off'
    }
};
