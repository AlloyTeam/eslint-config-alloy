module.exports = {
    rules: {
        /**
         * 禁止函数在不同分支返回不同类型的值
         * @reason 缺少 TypeScript 的支持，类型判断是不准确的
         */
        'consistent-return': 'off'
    }
};
