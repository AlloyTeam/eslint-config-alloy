module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description @fixable 禁止出现 foo['bar']，必须写成 foo.bar
         * @off 当需要写一系列属性的时候，可以更统一
         */
        'dot-notation': 'off'
    }
};
