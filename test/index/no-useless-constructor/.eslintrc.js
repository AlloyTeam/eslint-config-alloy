module.exports = {
    rules: {
        /**
         * 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
         */
        'no-useless-constructor': 'error'
    }
};
