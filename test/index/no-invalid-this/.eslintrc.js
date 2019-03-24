module.exports = {
    rules: {
        /**
         * 禁止在类之外的地方使用 this
         * @category Best Practices
         * @reason this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
         */
        'no-invalid-this': 'off'
    }
};
