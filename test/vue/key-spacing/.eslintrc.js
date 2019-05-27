module.exports = {
    rules: {
        /**
         * 对象字面量中冒号前面禁止有空格，后面必须有空格
         * @category Uncategorized
         * @fixable
         */
        'vue/key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ]
    }
};
