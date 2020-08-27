module.exports = {
  rules: {
    /**
     * 变量必须先定义后使用
     */
    'no-use-before-define': [
      'error',
      {
        variables: false,
        functions: false,
        classes: false,
      },
    ],
  },
};
