module.exports = {
    rules: {
        /**
         * 禁止使用 non-null 断言（感叹号）
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off'
    }
};
