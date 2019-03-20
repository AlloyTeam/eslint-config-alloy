module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         * @fixable
         */
        'no-useless-rename': 'error'
    }
};
