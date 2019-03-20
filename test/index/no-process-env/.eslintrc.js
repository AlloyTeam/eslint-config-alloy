module.exports = {
    rules: {
        /**
         * @category nodejs-and-commonjs
         * @description 禁止使用 process.env.NODE_ENV
         * @reason 使用很常见
         */
        'no-process-env': 'off'
    }
};
