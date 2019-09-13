module.exports = {
    rules: {
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-readonly': 'off'
    }
};
