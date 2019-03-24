module.exports = {
    rules: {
        /**
         * 禁止使用 foo == null，必须使用 foo === null
         * @category Best Practices
         * @reason foo == null 比较常用，可以用于判断 foo 不是 undefined 并且不是 null，故允许此写法
         */
        'no-eq-null': 'off'
    }
};
