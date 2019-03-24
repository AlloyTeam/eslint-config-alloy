module.exports = {
    rules: {
        /**
         * 禁止使用三斜杠引入类型定义文件
         * @category TypeScript
         * @reason 三斜杠是已废弃的语法
         */
        '@typescript-eslint/no-triple-slash-reference': 'error'
    }
};
