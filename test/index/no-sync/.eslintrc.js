module.exports = {
    rules: {
        /**
         * @memberof nodejs-and-commonjs
         * @description 禁止使用 node 中的同步的方法，比如 fs.readFileSync
         * @off 使用很常见
         */
        'no-sync': 'off'
    }
};
