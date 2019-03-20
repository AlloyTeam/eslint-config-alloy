module.exports = {
    rules: {
        /**
         * @memberof ecmascript-6
         * @description @fixable 必须使用 ... 而不是 apply，比如 foo(...args)
         * @off  apply 很常用
         */
        'prefer-spread': 'off'
    }
};
