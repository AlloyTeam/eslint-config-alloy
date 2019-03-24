module.exports = {
    rules: {
        /**
         * html 的结束标签必须符合规定
         * @category Improving Readability
         * @reason 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
         * @fixable
         */
        'vue/html-end-tags': 'off'
    }
};
