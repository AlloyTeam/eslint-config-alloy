module.exports = {
  rules: {
    /**
     * 禁止函数的循环复杂度超过 20
     * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
     */
    complexity: [
      'error',
      {
        max: 20,
      },
    ],
  },
};
