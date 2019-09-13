module.exports = {
    rules: {
        /**
         * async 函数的返回值必须是 Promise
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/promise-function-async': 'off'
    }
};
