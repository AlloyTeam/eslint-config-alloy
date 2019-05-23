module.exports = {
    rules: {
        /**
         * async 函数的返回值必须是 Promise
         * @category TypeScript
         * @reason 有时 async 函数在某个分支是同步的，不需要返回 Promise
         * @requires-types-information
         */
        '@typescript-eslint/promise-function-async': 'off'
    }
};
