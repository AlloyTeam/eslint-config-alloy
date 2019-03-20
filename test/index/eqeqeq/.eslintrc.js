module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
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
