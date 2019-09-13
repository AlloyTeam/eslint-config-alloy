module.exports = {
    rules: {
        /**
         * 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
         */
        'no-useless-computed-key': 'error'
    }
};
