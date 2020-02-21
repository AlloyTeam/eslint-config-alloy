module.exports = {
    rules: {
        /**
         * 两个 inline 元素之间必须有空格，否则视觉上它们就贴在一起了
         * @reason 这是样式的问题，不应该由空格约束
         */
        'react/no-adjacent-inline-elements': 'off'
    }
};
