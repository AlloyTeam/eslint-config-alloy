module.exports = {
    rules: {
        /**
         * 禁止对没有 then 方法的对象使用 await
         * @category TypeScript
         * @requires-types-information
         */
        '@typescript-eslint/await-thenable': 'off'
    }
};
