module.exports = {
    rules: {
        /**
         * 禁止使用 process.env.NODE_ENV
         * @category nodejs-and-commonjs
         * @reason 使用很常见
         */
        'no-process-env': 'off'
    }
};
