module.exports = {
    rules: {
        /**
         * 禁止给类的构造函数的参数添加修饰符
         * @reason 强制所有属性都定义到类里面，比较统一
         */
        '@typescript-eslint/no-parameter-properties': 'error'
    }
};
