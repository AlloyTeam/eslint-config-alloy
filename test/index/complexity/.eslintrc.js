module.exports = {
    rules: {
        /**
         * @memberof best-practices
         * @description 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
         */
        complexity: [
            'error',
            {
                max: 20
            }
        ]
    }
};
