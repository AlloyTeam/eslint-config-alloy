module.exports = {
    rules: {
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @category TypeScript
         * @reason 已经禁止使用命名空间了
         * @fixable
         * @requires-type-information
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off'
    }
};
