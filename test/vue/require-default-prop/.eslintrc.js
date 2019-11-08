module.exports = {
    rules: {
        /**
         * props 如果不是 required 的字段，必须有默认值
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/require-default-prop': 'off'
    }
};
