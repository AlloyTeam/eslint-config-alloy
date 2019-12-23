module.exports = {
    rules: {
        /**
         * 禁止直接使用 Buffer
         * @reason Buffer 构造函数是已废弃的语法
         */
        'no-buffer-constructor': 'error'
    }
};
