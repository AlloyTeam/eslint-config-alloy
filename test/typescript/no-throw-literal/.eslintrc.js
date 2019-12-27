module.exports = {
    rules: {
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-throw-literal': 'off'
    }
};
