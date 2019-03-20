module.exports = {
    rules: {
        /**
         * @memberof
         * @description 禁止在 componentDidMount 里面使用 setState
         * @off 同构应用需要在 didMount 里写 setState
         */
        'react/no-did-mount-set-state': 'off'
    }
};
