module.exports = {
    rules: {
        /**
         * 私有成员必须以 _ 开头
         * @category TypeScript
         * @reason 已有 private 修饰符了，没必要限制变量名
         */
        '@typescript-eslint/member-naming': 'off'
    }
};
