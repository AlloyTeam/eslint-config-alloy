module.exports = {
    rules: {
        /**
         * 禁止已定义的变量未使用
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unused-vars-experimental': 'off'
    }
};
