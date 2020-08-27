module.exports = {
  rules: {
    /**
     * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
     * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
     * @TODO TypeScript 3.9 发布后开启
     */
    '@typescript-eslint/prefer-ts-expect-error': 'off',
  },
};
