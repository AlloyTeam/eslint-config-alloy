module.exports = {
    rules: {
        /**
         * async 函数中必须存在 await 语句
         * @category Best Practices
         * @reason async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法
         */
        'require-await': 'off'
    }
};
