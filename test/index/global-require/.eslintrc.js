module.exports = {
    rules: {
        /**
         * @memberof nodejs-and-commonjs
         * @description require 必须在全局作用域下
         * @off 条件加载很常见
         */
        'global-require': 'off'
    }
};
