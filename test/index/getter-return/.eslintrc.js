module.exports = {
    rules: {
        /**
         * getter 必须有返回值，并且禁止返回空，比如 return;
         * @category possible-errors
         */
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ]
    }
};
