module.exports = {
    rules: {
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @category Possible Errors
         * @reason 使用 babel 时，在编译阶段就会报错了
         */
        'no-dupe-args': 'off'
    }
};
