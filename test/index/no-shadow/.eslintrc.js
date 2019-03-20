module.exports = {
    rules: {
        /**
         * @category variables
         * @description 禁止变量名与上层作用域内的定义过的变量重复
         * @reason 很多时候函数的形参和传参是同名的
         */
        'no-shadow': 'off'
    }
};
