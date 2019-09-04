module.exports = {
    rules: {
        /**
         * 禁止使用 caller 或 callee
         * @category Best Practices
         * @reason 它们是已废弃的语法
         */
        'no-caller': 'error'
    }
};
