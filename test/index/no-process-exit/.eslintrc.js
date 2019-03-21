module.exports = {
    rules: {
        /**
         * 禁止使用 process.exit(0)
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-process-exit': 'off'
    }
};
