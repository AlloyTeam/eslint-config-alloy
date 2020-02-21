module.exports = {
    rules: {
        /**
         * 禁止重复定义类的成员
         * @reason 编译阶段就会报错了
         */
        '@typescript-eslint/no-dupe-class-members': 'off'
    }
};
