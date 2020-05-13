/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     Swan <noreply@github.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     lzw <mingxin2014@gmail.com>
 *     ryoliu <sfesh@163.com>
 *     sunhui04 <sunhui04@meituan.com>
 *
 * 依赖版本：
 *     eslint ^7.0.0
 *     babel-eslint ^10.1.0
 *     eslint-plugin-react ^7.20.0
 *     vue-eslint-parser ^7.0.0
 *     eslint-plugin-vue ^6.2.2
 *     @typescript-eslint/parser ^2.33.0
 *     @typescript-eslint/eslint-plugin ^2.33.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @reason 为什么要开启（关闭）此规则
 */
module.exports = {
    plugins: ['react'],
    rules: {
        /**
         * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/boolean-prop-naming': 'off',
        /**
         * <button> 必须有 type 属性
         */
        'react/button-has-type': 'off',
        /**
         * 一个 defaultProps 必须有对应的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/default-props-match-prop-types': 'off',
        /**
         * props, state, context 必须用解构赋值
         */
        'react/destructuring-assignment': 'off',
        /**
         * 组件必须有 displayName 属性
         * @reason 不强制要求写 displayName
         */
        'react/display-name': 'off',
        /**
         * 禁止在自定义组件中使用指定的 props
         */
        'react/forbid-component-props': 'off',
        /**
         * 禁止在 dom 组件中使用指定的 props
         */
        'react/forbid-dom-props': 'off',
        /**
         * 禁止使用指定的组件
         */
        'react/forbid-elements': 'off',
        /**
         * 禁止使用另一个组件的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/forbid-foreign-prop-types': 'off',
        /**
         * 禁止使用 PropTypes.any PropTypes.array 和 PropTypes.object
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/forbid-prop-types': 'off',
        /**
         * 限制函数式组件的函数形式（函数声明、函数表达式或箭头函数）
         * @reason 一些场景还不能覆盖，如 export default function，自动修复功能在 ts 中有些问题
         */
        'react/function-component-definition': 'off',
        /**
         * 布尔值的属性必须显式的声明值为 true
         */
        'react/jsx-boolean-value': 'off',
        /**
         * 禁止 jsx 中使用无用的引号
         */
        'react/jsx-curly-brace-presence': ['error', 'never'],
        /**
         * 限制文件后缀
         */
        'react/jsx-filename-extension': 'off',
        /**
         * 必须使用 <></> 而不是 React.Fragment
         * @reason <></> 不需要额外引入 Fragment 组件
         */
        'react/jsx-fragments': ['error', 'syntax'],
        /**
         * handler 的名称必须是 onXXX 或 handleXXX
         */
        'react/jsx-handler-names': 'off',
        /**
         * 数组中的 jsx 必须有 key
         */
        'react/jsx-key': [
            'error',
            {
                checkFragmentShorthand: true
            }
        ],
        /**
         * 限制 jsx 层级
         */
        'react/jsx-max-depth': 'off',
        /**
         * jsx 中禁止使用 bind
         */
        'react/jsx-no-bind': 'off',
        /**
         * 禁止在 jsx 中使用像注释的字符串
         */
        'react/jsx-no-comment-textnodes': 'error',
        /**
         * 禁止出现重复的 props
         */
        'react/jsx-no-duplicate-props': 'error',
        /**
         * 禁止在 jsx 中出现字符串
         */
        'react/jsx-no-literals': 'off',
        /**
         * 禁止出现 href="javascript:void(0)"
         * @reason React 已经有 warning 了，并且会在将来禁止此类属性值
         */
        'react/jsx-no-script-url': 'error',
        /**
         * 禁止使用 target="_blank"
         */
        'react/jsx-no-target-blank': 'off',
        /**
         * 禁止使用未定义的组件
         */
        'react/jsx-no-undef': 'error',
        /**
         * 禁止无意义的 Fragment 组件
         */
        'react/jsx-no-useless-fragment': 'error',
        /**
         * 组件的名称必须符合 PascalCase
         */
        'react/jsx-pascal-case': 'error',
        /**
         * 禁止使用 {...props}
         */
        'react/jsx-props-no-spreading': 'off',
        /**
         * defaultProps 必须按字母排序
         */
        'react/jsx-sort-default-props': 'off',
        /**
         * props 必须按字母排序
         */
        'react/jsx-sort-props': 'off',
        /**
         * 修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）
         */
        'react/jsx-uses-react': 'error',
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         */
        'react/jsx-uses-vars': 'error',
        /**
         * 禁止在 setState 中使用 this.state
         */
        'react/no-access-state-in-setstate': 'off',
        /**
         * 两个 inline 元素之间必须有空格，否则视觉上它们就贴在一起了
         * @reason 这是样式的问题，不应该由空格约束
         */
        'react/no-adjacent-inline-elements': 'off',
        /**
         * 禁止使用数组的索引作为 key
         */
        'react/no-array-index-key': 'off',
        /**
         * 禁止将 children 作为一个 prop
         */
        'react/no-children-prop': 'error',
        /**
         * 禁止使用 dangerouslySetInnerHTML
         */
        'react/no-danger': 'off',
        /**
         * 禁止在使用了 dangerouslySetInnerHTML 的组件内添加 children
         */
        'react/no-danger-with-children': 'error',
        /**
         * 禁止使用已废弃的 api
         */
        'react/no-deprecated': 'error',
        /**
         * 禁止在 componentDidMount 里使用 setState
         * @reason 同构应用需要在 didMount 里使用 setState
         */
        'react/no-did-mount-set-state': 'off',
        /**
         * 禁止在 componentDidUpdate 里使用 setState
         */
        'react/no-did-update-set-state': 'error',
        /**
         * 禁止直接修改 this.state
         */
        'react/no-direct-mutation-state': 'error',
        /**
         * 禁止使用 findDOMNode
         */
        'react/no-find-dom-node': 'error',
        /**
         * 禁止使用 isMounted
         * @reason 它是已废弃的语法
         */
        'react/no-is-mounted': 'error',
        /**
         * 禁止在一个文件创建两个组件
         * @reason 有一个 bug：https://github.com/yannickcr/eslint-plugin-react/issues/1181
         */
        'react/no-multi-comp': 'off',
        /**
         * 禁止在 React.PureComponent 中使用 shouldComponentUpdate
         */
        'react/no-redundant-should-component-update': 'error',
        /**
         * 禁止使用 ReactDOM.render 的返回值
         */
        'react/no-render-return-value': 'error',
        /**
         * 禁止使用 setState
         */
        'react/no-set-state': 'off',
        /**
         * 禁止使用字符串 ref
         */
        'react/no-string-refs': 'error',
        /**
         * 禁止在函数组件中使用 this
         */
        'react/no-this-in-sfc': 'error',
        /**
         * 禁止组件的属性或生命周期大小写错误
         */
        'react/no-typos': 'error',
        /**
         * 禁止在组件的内部存在未转义的 >, ", ' 或 }
         */
        'react/no-unescaped-entities': 'error',
        /**
         * 禁止出现 HTML 中的属性，如 class
         */
        'react/no-unknown-property': 'error',
        /**
         * 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
         */
        'react/no-unsafe': [
            'error',
            {
                checkAliases: true
            }
        ],
        /**
         * 禁止出现未使用的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/no-unused-prop-types': 'off',
        /**
         * 已定义的 state 必须使用
         * @reason 没有官方文档，并且存在很多 bug：https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
         */
        'react/no-unused-state': 'off',
        /**
         * 禁止在 componentWillUpdate 中使用 setState
         * @reason 已经禁止使用 componentWillUpdate 了
         */
        'react/no-will-update-set-state': 'off',
        /**
         * 必须使用 Class 的形式创建组件
         */
        'react/prefer-es6-class': ['error', 'always'],
        /**
         * 使用 Flow 时，props 必须设置为只读的
         */
        'react/prefer-read-only-props': 'off',
        /**
         * 必须使用函数式组件
         */
        'react/prefer-stateless-function': 'off',
        /**
         * 组件必须写 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/prop-types': 'off',
        /**
         * 出现 jsx 的地方必须导入 React
         * @reason 已经在 no-undef 中限制了
         */
        'react/react-in-jsx-scope': 'off',
        /**
         * 非 required 的 prop 必须有 defaultProps
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/require-default-props': 'off',
        /**
         * 组件必须有 shouldComponentUpdate
         */
        'react/require-optimization': 'off',
        /**
         * render 方法中必须有返回值
         */
        'react/require-render-return': 'error',
        /**
         * 组件内没有 children 时，必须使用自闭和写法
         */
        'react/self-closing-comp': 'error',
        /**
         * 组件内方法必须按照一定规则排序
         */
        'react/sort-comp': 'error',
        /**
         * propTypes 的属性必须按照字母排序
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/sort-prop-types': 'off',
        /**
         * 必须在构造函数中初始化 state
         */
        'react/state-in-constructor': 'off',
        /**
         * 类的静态属性必须使用 static 关键字定义
         */
        'react/static-property-placement': 'error',
        /**
         * style 属性的取值必须是 object
         */
        'react/style-prop-object': 'error',
        /**
         * img, br 标签中禁止有 children
         */
        'react/void-dom-elements-no-children': 'error'
    }
};
