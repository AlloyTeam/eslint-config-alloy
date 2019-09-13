module.exports = {
    rules: {
        /**
         * async 函数中必须存在 await 语句
         * @reason 统一关闭 requires type information 的规则
         */
        'require-await': 'off'
    }
};
