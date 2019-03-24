module.exports = {
    rules: {
        /**
         * 禁止使用 node 中的同步的方法，比如 fs.readFileSync
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-sync': 'off'
    }
};
