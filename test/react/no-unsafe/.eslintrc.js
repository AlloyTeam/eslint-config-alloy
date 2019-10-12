module.exports = {
    rules: {
        /**
         * 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
         */
        'react/no-unsafe': ['error', { checkAliases: true }]
    }
};
