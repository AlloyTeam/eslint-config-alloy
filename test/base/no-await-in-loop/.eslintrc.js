module.exports = {
    rules: {
        /**
         * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
         * @reason 要求太严格了，有时需要在循环中写 await
         */
        'no-await-in-loop': 'off'
    }
};
