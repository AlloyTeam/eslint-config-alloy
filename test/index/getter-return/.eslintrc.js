module.exports = {
    rules: {
        /**
         * getter 必须有返回值，并且禁止返回空
         * @category Possible Errors
         */
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ]
    }
};
