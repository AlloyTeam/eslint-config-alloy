module.exports = {
    rules: {
        /**
         * 禁止出现 location.href = 'javascript:void(0)';
         * @reason 有些场景下还是需要用到这个
         */
        'no-script-url': 'off'
    }
};
