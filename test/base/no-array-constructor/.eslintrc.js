module.exports = {
    rules: {
        /**
         * 禁止使用 Array 构造函数时传入的参数超过一个
         * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
         * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
         */
        'no-array-constructor': 'error'
    }
};
