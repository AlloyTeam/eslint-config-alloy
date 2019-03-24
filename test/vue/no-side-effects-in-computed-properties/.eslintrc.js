module.exports = {
    rules: {
        /**
         * 禁止在计算属性中对属性修改
         * @category Error Prevention
         * @reason 太严格了
         */
        'vue/no-side-effects-in-computed-properties': 'off'
    }
};
