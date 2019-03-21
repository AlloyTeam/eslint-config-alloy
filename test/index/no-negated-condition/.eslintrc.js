module.exports = {
    rules: {
        /**
         * 禁止 if 里面有否定的表达式，比如：
         * @category stylistic-issues
         * if (a !== b) {
         *     doSomething();
         * } else {
         *     doSomethingElse();
         * }
         * @reason 否定的表达式可以把逻辑表达的更清楚
         */
        'no-negated-condition': 'off'
    }
};
