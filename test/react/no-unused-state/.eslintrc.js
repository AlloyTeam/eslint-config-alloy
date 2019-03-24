module.exports = {
    rules: {
        /**
         * 定义过的 state 必须使用
         * @category React
         * @reason 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
         */
        'react/no-unused-state': 'off'
    }
};
