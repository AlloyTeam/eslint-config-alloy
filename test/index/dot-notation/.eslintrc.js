module.exports = {
    rules: {
        /**
         * 禁止使用 foo['bar']，必须写成 foo.bar
         * @reason 当需要写一系列属性的时候，可以更统一
         */
        'dot-notation': 'off'
    }
};
