module.exports = {
  rules: {
    /**
     * 注释的斜线或 * 后必须有空格
     */
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],
  },
};
