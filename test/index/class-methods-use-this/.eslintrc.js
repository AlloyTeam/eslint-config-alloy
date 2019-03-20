module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 在类的非静态方法中，必须存在对 this 的引用
         * @reason 太严格了
         */
        'class-methods-use-this': 'off'
    }
};
