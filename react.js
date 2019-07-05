/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     Swan <noreply@github.com>
 *
 * 依赖版本：
 *     eslint ^5.16.0
 *     babel-eslint ^10.0.1
 *     eslint-plugin-react ^7.14.2
 *     vue-eslint-parser ^5.0.0
 *     eslint-plugin-vue ^5.2.3
 *     @typescript-eslint/parser ^1.10.2
 *     @typescript-eslint/eslint-plugin ^1.10.2
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @category 此规则属于哪种分类
 * @reason 为什么要开启（关闭）此规则
 * @fixable 支持自动修复
 */
module.exports = {
    extends: ['./index.js'],
    plugins: ['react'],
    rules: {
        /**
         * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/boolean-prop-naming': 'off',
        /**
         * <button> 必须有 type 属性
         * @category React
         */
        'react/button-has-type': 'off',
        /**
         * 一个 defaultProps 必须有对应的 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/default-props-match-prop-types': 'off',
        /**
         * props state context 必须用解构赋值
         * @category React
         */
        'react/destructuring-assignment': 'off',
        /**
         * 组件必须有 displayName 属性
         * @category React
         * @reason 不强制要求写 displayName
         */
        'react/display-name': 'off',
        /**
         * 禁止在自定义组件中使用一些指定的 props
         * @category React
         * @reason 没必要限制
         */
        'react/forbid-component-props': 'off',
        /**
         * 禁止指定的 props
         * @category React
         */
        'react/forbid-dom-props': 'off',
        /**
         * 禁止使用一些指定的 elements
         * @category React
         * @reason 没必要限制
         */
        'react/forbid-elements': 'off',
        /**
         * 禁止直接使用别的组建的 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/forbid-foreign-prop-types': 'off',
        /**
         * 禁止使用一些指定的 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/forbid-prop-types': 'off',
        /**
         * 禁止在 setState 时使用 this.state
         * @category React
         */
        'react/no-access-state-in-setstate': 'off',
        /**
         * 禁止使用数组的 index 作为 key
         * @category React
         * @reason 太严格了
         */
        'react/no-array-index-key': 'off',
        /**
         * 禁止使用 dangerouslySetInnerHTML
         * @category React
         * @reason 没必要限制
         */
        'react/no-danger': 'off',
        /**
         * 禁止在 componentDidMount 里面使用 setState
         * @category React
         * @reason 同构应用需要在 didMount 里写 setState
         */
        'react/no-did-mount-set-state': 'off',
        /**
         * 禁止在一个文件创建两个组件
         * @category React
         * @reason 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181
         */
        'react/no-multi-comp': 'off',
        /**
         * 禁止使用 setState
         * @category React
         * @reason setState 很常用
         */
        'react/no-set-state': 'off',
        /**
         * 禁止在函数组件中使用 this
         * @category React
         */
        'react/no-this-in-sfc': 'error',
        /**
         * 禁止出现 HTML 中的属性，如 class
         * @category React
         * @fixable
         */
        'react/no-unknown-property': 'error',
        /**
         * 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
         * @category React
         */
        'react/no-unsafe': 'error',
        /**
         * 禁止出现未使用的 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/no-unused-prop-types': 'off',
        /**
         * 定义过的 state 必须使用
         * @category React
         * @reason 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
         */
        'react/no-unused-state': 'off',
        /**
         * 使用 Flow 时，props 必须设置为只读的
         * @category React
         */
        'react/prefer-read-only-props': 'off',
        /**
         * 必须使用 pure function
         * @category React
         * @reason 没必要限制
         */
        'react/prefer-stateless-function': 'off',
        /**
         * 组件必须写 propTypes
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/prop-types': 'off',
        /**
         * 出现 jsx 的地方必须 import React
         * @category React
         * @reason 已经在 no-undef 中限制了
         */
        'react/react-in-jsx-scope': 'off',
        /**
         * 非 required 的 prop 必须有 defaultProps
         * @category React
         * @reason 不强制要求写 propTypes
         */
        'react/require-default-props': 'off',
        /**
         * 组件必须有 shouldComponentUpdate
         * @category React
         * @reason 没必要限制
         */
        'react/require-optimization': 'off',
        /**
         * 组件内没有 children 时，必须使用自闭和写法
         * @category React
         * @reason 没必要限制
         * @fixable
         */
        'react/self-closing-comp': 'off',
        /**
         * 组件内方法必须按照一定规则排序
         * @category React
         * @fixable
         */
        'react/sort-comp': 'error',
        /**
         * propTypes 的熟悉必须按照字母排序
         * @category React
         * @reason 没必要限制
         */
        'react/sort-prop-types': 'off',
        /**
         * 必须在构造函数中初始化 state
         * @category React
         */
        'react/state-in-constructor': 'off',
        /**
         * 类的静态属性必须使用 static 关键字定义
         * @category React
         */
        'react/static-property-placement': 'error',
        /**
         * 布尔值的属性必须显式的写 someprop={true}
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-boolean-value': 'off',
        /**
         * 禁止兄弟元素之间有空格
         * @category JSX-specific
         */
        'react/jsx-child-element-spacing': 'off',
        /**
         * 自闭和标签的反尖括号必须与尖括号的那一行对齐
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: false,
                selfClosing: 'line-aligned'
            }
        ],
        /**
         * 结束标签必须与开始标签的那一行对齐
         * @category JSX-specific
         * @reason 已经在 jsx-indent 中限制了
         * @fixable
         */
        'react/jsx-closing-tag-location': 'off',
        /**
         * 禁止 jsx 中使用无用的引号
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-curly-brace-presence': ['error', 'never'],
        /**
         * 限制 jsx 中的大括号内部首尾换行符
         * @category JSX-specific
         * @fixable
         * @reason 要么首尾都换行，要么首尾都不换行
         */
        'react/jsx-curly-newline': 'error',
        /**
         * 大括号内前后禁止有空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'never',
                attributes: {
                    allowMultiline: true
                },
                children: true,
                spacing: {
                    objectLiterals: 'never'
                }
            }
        ],
        /**
         * props 与 value 之间的等号前后禁止有空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-equals-spacing': ['error', 'never'],
        /**
         * 限制文件后缀
         * @category JSX-specific
         * @reason 没必要限制
         */
        'react/jsx-filename-extension': 'off',
        /**
         * 第一个 prop 必须得换行
         * @category JSX-specific
         * @reason 没必要限制
         * @fixable
         */
        'react/jsx-first-prop-new-line': 'off',
        /**
         * 必须使用 <></> 而不是 React.Fragment
         * @category JSX-specific
         * @fixable
         * @reason <></> 不需要额外引入 Fragment 组件
         */
        'react/jsx-fragments': ['error', 'syntax'],
        /**
         * handler 的名称必须是 onXXX 或 handleXXX
         * @category JSX-specific
         * @reason 没必要限制
         */
        'react/jsx-handler-names': 'off',
        /**
         * jsx 的 children 缩进必须为四个空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-indent': ['error', 4],
        /**
         * jsx 的 props 缩进必须为四个空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-indent-props': ['error', 4],
        /**
         * 限制 jsx 层级
         * @category JSX-specific
         */
        'react/jsx-max-depth': 'off',
        /**
         * 限制每行的 props 数量
         * @category JSX-specific
         * @reason 没必要限制
         * @fixable
         */
        'react/jsx-max-props-per-line': 'off',
        /**
         * jsx 中禁止使用 bind
         * @category JSX-specific
         * @reason 太严格了
         */
        'react/jsx-no-bind': 'off',
        /**
         * 禁止在 jsx 中出现字符串
         * @category JSX-specific
         * @reason 没必要限制
         */
        'react/jsx-no-literals': 'off',
        /**
         * 禁止使用 target="_blank"
         * @category JSX-specific
         * @reason 没必要限制
         */
        'react/jsx-no-target-blank': 'off',
        /**
         * 禁止有内容的元素写在一行内
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-one-expression-per-line': 'off',
        /**
         * 禁止出现多于的空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-props-no-multi-spaces': 'error',
        /**
         * 禁止使用 {...props}
         * @category JSX-specific
         */
        'react/jsx-props-no-spreading': 'off',
        /**
         * defaultProps 必须按字母排序
         * @category JSX-specific
         */
        'react/jsx-sort-default-props': 'off',
        /**
         * props 必须排好序
         * @category JSX-specific
         * @reason 没必要限制
         * @fixable
         */
        'react/jsx-sort-props': 'off',
        /**
         * jsx 的开始和闭合处禁止有空格
         * @category JSX-specific
         * @fixable
         */
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        /**
         * 多行的 jsx 必须有括号包起来
         * @category JSX-specific
         * @reason 没必要限制
         * @fixable
         */
        'react/jsx-wrap-multilines': 'off',
        /**
         * 数组中的 jsx 必须有 key
         */
        'react/jsx-key': 'error',
        /**
         * 禁止在 jsx 中使用像注释的字符串
         */
        'react/jsx-no-comment-textnodes': 'error',
        /**
         * 禁止出现重复的 props
         */
        'react/jsx-no-duplicate-props': 'error',
        /**
         * 禁止使用未定义的 jsx elemet
         */
        'react/jsx-no-undef': 'error',
        /**
         * 禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>
         */
        'react/jsx-pascal-case': 'error',
        /**
         * jsx 文件必须 import React
         */
        'react/jsx-uses-react': 'error',
        /**
         * 定义了的 jsx element 必须使用
         */
        'react/jsx-uses-vars': 'error',
        /**
         * 禁止使用 children 做 props
         */
        'react/no-children-prop': 'error',
        /**
         * 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
         */
        'react/no-danger-with-children': 'error',
        /**
         * 禁止使用已废弃的 api
         */
        'react/no-deprecated': 'error',
        /**
         * 禁止在 componentDidUpdate 里面使用 setState
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
         */
        'react/no-is-mounted': 'error',
        /**
         * 禁止在 PureComponent 中使用 shouldComponentUpdate
         */
        'react/no-redundant-should-component-update': 'error',
        /**
         * 禁止使用 ReactDOM.render 的返回值
         */
        'react/no-render-return-value': 'error',
        /**
         * 禁止使用字符串 ref
         */
        'react/no-string-refs': 'error',
        /**
         * 禁止拼写错误
         */
        'react/no-typos': 'error',
        /**
         * 禁止在组件的内部存在未转义的 >, ", ' 或 }
         */
        'react/no-unescaped-entities': 'error',
        /**
         * 禁止在 componentWillUpdate 中使用 setState
         */
        'react/no-will-update-set-state': 'error',
        /**
         * 必须使用 Class 的形式创建组件
         */
        'react/prefer-es6-class': ['error', 'always'],
        /**
         * render 方法中必须有返回值
         */
        'react/require-render-return': 'error',
        /**
         * style 属性的取值必须是 object
         */
        'react/style-prop-object': 'error',
        /**
         * HTML 中的自闭和标签禁止有 children
         */
        'react/void-dom-elements-no-children': 'error'
    }
};
