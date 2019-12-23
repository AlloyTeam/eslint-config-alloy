module.exports = {
    rules: {
        /**
         * 禁止修改原生对象
         * @reason 修改原生对象可能会与将来版本的 js 冲突
         */
        'no-extend-native': 'error'
    }
};
