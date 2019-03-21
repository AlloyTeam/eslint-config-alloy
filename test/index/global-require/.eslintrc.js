module.exports = {
    rules: {
        /**
         * require 必须在全局作用域下
         *
         * @category nodejs-and-commonjs
         * @reason 条件加载很常见
         */
        'global-require': 'off'
    }
};
