module.exports = {
    rules: {
        /**
         * require 必须在全局作用域下
         * @reason 条件加载很常见
         */
        'global-require': 'off'
    }
};
