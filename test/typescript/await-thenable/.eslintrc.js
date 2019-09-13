module.exports = {
    rules: {
        /**
         * 禁止对没有 then 方法的对象使用 await
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/await-thenable': 'off'
    }
};
