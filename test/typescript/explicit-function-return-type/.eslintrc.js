module.exports = {
    rules: {
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/explicit-function-return-type': 'off'
    }
};
