module.exports = {
    rules: {
        /**
         * 禁止获取 any 类型的变量中的属性
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unsafe-member-access': 'off'
    }
};
