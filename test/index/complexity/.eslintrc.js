module.exports = {
    rules: {
        /**
         * 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
         * @category Best Practices
         */
        complexity: [
            'error',
            {
                max: 20
            }
        ]
    }
};
