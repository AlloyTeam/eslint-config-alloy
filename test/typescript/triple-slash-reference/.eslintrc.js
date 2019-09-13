module.exports = {
    rules: {
        /**
         * 禁止使用三斜杠导入文件
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
            'error',
            { path: 'never', types: 'always', lib: 'always' }
        ]
    }
};
