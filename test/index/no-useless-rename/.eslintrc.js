module.exports = {
    rules: {
        /**
         * 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         * @category ECMAScript 6
         * @fixable
         */
        'no-useless-rename': 'error'
    }
};
