module.exports = {
    rules: {
        /**
         * @category ecmascript-6
         * @description 必须使用 ... 而不是 apply，比如 foo(...args)
         * @reason apply 很常用
         * @fixable
         */
        'prefer-spread': 'off'
    }
};
