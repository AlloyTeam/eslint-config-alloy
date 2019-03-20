module.exports = {
    rules: {
        /**
         * @category possible-errors
         * @description getter 必须有返回值，并且禁止返回空，比如 return;
         */
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ]
    }
};
