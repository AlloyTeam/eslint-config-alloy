module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
         * @reason 箭头函数的返回值，应该允许灵活设置
         * @fixable
         */
        'arrow-body-style': 'off'
    }
};
