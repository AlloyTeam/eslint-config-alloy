module.exports = {
    rules: {
        /**
         * 禁止在定义变量之前就使用它
         * @category TypeScript
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/no-use-before-define': 'off'
    }
};
