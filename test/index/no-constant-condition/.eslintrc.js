module.exports = {
    rules: {
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         */
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ]
    }
};
