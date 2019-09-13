module.exports = {
    rules: {
        /**
         * 使用 ES2018 中的正则表达式命名组
         * @reason 正则表达式已经较难理解了，没必要强制加上命名组
         */
        'prefer-named-capture-group': 'off'
    }
};
