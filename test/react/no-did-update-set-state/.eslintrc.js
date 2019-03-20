module.exports = {
    rules: {
        /**
         * @memberof
         * @description 禁止在 componentDidUpdate 里面使用 setState
         */
        'react/no-did-update-set-state': 'error'
    }
};
