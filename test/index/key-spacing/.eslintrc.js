module.exports = {
    rules: {
        /**
         * @memberof stylistic-issues
         * @description @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
         */
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ]
    }
};
