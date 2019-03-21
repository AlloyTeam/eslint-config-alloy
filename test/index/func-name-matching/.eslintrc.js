module.exports = {
    rules: {
        /**
         * 函数赋值给变量的时候，函数名必须与变量名一致
         * @category Stylistic Issues
         */
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ]
    }
};
