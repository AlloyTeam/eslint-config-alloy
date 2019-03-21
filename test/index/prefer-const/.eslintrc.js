module.exports = {
    rules: {
        /**
         * 申明后不再被修改的变量必须使用 const 来申明
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'prefer-const': 'off'
    }
};
