module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
         * @fixable
         */
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ]
    }
};
