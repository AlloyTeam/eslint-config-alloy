module.exports = {
    rules: {
        /**
         * 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
         * @category ECMAScript 6
         */
        'no-useless-constructor': 'error'
    }
};
