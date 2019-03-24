module.exports = {
    rules: {
        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的指定类型
         * @category TypeScript
         * @reason 可以简化代码
         * @fixable
         */
        '@typescript-eslint/no-inferrable-types': 'error'
    }
};
