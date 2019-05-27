module.exports = {
    rules: {
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
         * @category Uncategorized
         * @fixable
         */
        'vue/eqeqeq': [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ]
    }
};
