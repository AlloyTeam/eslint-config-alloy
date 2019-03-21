module.exports = {
    rules: {
        /**
         * 禁止使用 process.exit(0)
         * @category nodejs-and-commonjs
         * @reason 使用很常见
         */
        'no-process-exit': 'off'
    }
};
