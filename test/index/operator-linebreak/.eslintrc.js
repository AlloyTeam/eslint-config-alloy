module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 需要换行的时候，操作符必须放在行末，比如：
         * let foo = 1 +
         *     2
         * @off 有时放在第二行开始处更易读
         */
        'operator-linebreak': 'off'
    }
};
