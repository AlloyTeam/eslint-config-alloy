module.exports = {
    rules: {
        /**
         * 必须使用 ... 而不是 apply，比如 foo(...args)
         * @category ECMAScript 6
         * @reason apply 很常用
         * @fixable
         */
        'prefer-spread': 'off'
    }
};
