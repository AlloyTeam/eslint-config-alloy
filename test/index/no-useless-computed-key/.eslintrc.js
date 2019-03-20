module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
         * @fixable
         */
        'no-useless-computed-key': 'error'
    }
};
