module.exports = {
    rules: {
        /**
         * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         * @category ECMAScript 6
         */
        'no-useless-rename': 'error'
    }
};
