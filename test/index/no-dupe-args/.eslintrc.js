module.exports = {
    rules: {
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @reason 在编译阶段就会报错了
         */
        'no-dupe-args': 'off'
    }
};
