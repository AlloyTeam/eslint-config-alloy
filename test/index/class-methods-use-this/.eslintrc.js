module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description 在类的非静态方法中，必须存在对 this 的引用
         * @off 太严格了
         */
        'class-methods-use-this': 'off'
    }
};
