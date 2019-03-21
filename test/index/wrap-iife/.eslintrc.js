module.exports = {
    rules: {
        /**
         * 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
         * @category Best Practices
         * @fixable
         */
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true
            }
        ]
    }
};
