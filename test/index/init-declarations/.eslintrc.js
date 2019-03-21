module.exports = {
    rules: {
        /**
         * 变量必须在定义的时候赋值
         *
         * @category variables
         * @reason 先定义后赋值很常见
         */
        'init-declarations': 'off'
    }
};
