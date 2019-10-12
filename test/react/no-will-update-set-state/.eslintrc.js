module.exports = {
    rules: {
        /**
         * 禁止在 componentWillUpdate 中使用 setState
         * @reason 已经禁止使用 componentWillUpdate 了
         */
        'react/no-will-update-set-state': 'off'
    }
};
