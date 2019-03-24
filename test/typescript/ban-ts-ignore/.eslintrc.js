module.exports = {
    rules: {
        /**
        * 是否允许使用 // @ts-ignore 来忽略编译错误
        * @category TypeScript
        * @reason 既然已经使用注释来忽略编译错误了，说明已经清楚可能带来的后果
        */
        '@typescript-eslint/ban-ts-ignore': 'off'
    }
};
