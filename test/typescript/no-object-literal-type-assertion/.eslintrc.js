module.exports = {
    rules: {
        /**
         * 禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @category TypeScript
         */
        '@typescript-eslint/no-object-literal-type-assertion': 'error'
    }
};
