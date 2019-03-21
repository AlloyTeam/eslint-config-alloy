module.exports = {
    rules: {
        /**
         * callback 之后必须立即 return
         *
         * @category nodejs-and-commonjs
         * @reason Limitations 太多了
         */
        'callback-return': 'off'
    }
};
