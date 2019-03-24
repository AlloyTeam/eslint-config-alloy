module.exports = {
    rules: {
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>
         * @category TypeScript
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error'
    }
};
