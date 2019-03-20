module.exports = {
    rules: {
        /**
         * @category nodejs-and-commonjs
         * @description 相同类型的 require 必须放在一起
         * @reason 太严格了
         */
        'no-mixed-requires': 'off'
    }
};
