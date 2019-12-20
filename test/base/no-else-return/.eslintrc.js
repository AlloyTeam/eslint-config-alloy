module.exports = {
    rules: {
        /**
         * 禁止在 else 内使用 return，必须改为提前结束
         * @reason else 中使用 return 可以使代码结构更清晰
         */
        'no-else-return': 'off'
    }
};
