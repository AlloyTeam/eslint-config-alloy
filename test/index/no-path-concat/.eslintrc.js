module.exports = {
    rules: {
        /**
         * 禁止对 __dirname 或 __filename 使用字符串连接
         * @reason 不同平台下的路径符号不一致，建议使用 path 处理平台差异性
         */
        'no-path-concat': 'error'
    }
};
