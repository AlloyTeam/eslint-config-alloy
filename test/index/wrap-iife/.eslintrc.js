module.exports = {
    rules: {
        /**
         * @category best-practices
         * @description 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
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
