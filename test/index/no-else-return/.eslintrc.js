module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 禁止在 else 内使用 return，必须改为提前结束
         * @reason else 中使用 return 可以使代码结构更清晰
         * @fixable
         */
        'no-else-return': 'off'
    }
};
