module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
         * @reason foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
         */
        'no-eq-null': 'off'
    }
};
