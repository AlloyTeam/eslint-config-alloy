module.exports = {
    rules: {
        /**
         * 必须使用 !a 替代 a ? false : true
         * @reason 后者表达的更清晰
         */
        'no-unneeded-ternary': 'off'
    }
};
