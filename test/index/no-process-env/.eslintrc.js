module.exports = {
    rules: {
        /**
         * 禁止使用 process.env.NODE_ENV
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-process-env': 'off'
    }
};
