module.exports = {
  rules: {
    /**
     * 限制函数式组件的函数形式（函数声明、函数表达式或箭头函数）
     * @reason 一些场景还不能覆盖，如 export default function，自动修复功能在 ts 中有些问题
     */
    'react/function-component-definition': 'off',
  },
};
