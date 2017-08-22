/**
 * 本规则基于 eslint-plugin-react 7.1.0
 */

module.exports = {
    extends: [
        '@alloyteam/eslint-config-standard',
        './eslintrc-react.js',
    ]
    plugins: [
        'react'
    ],
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use, default to 'createReactClass'
            pragma: 'React',  // Pragma to use, default to 'React'
            version: '15.0' // React version, default to the latest React stable release
        }
    },
    rules: {
        // 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
        // 不强制要求写 propTypes，故关闭此条规则
        'react/boolean-prop-naming': 'off',
        // 一个 defaultProps 必须有对应的 propTypes
        // 一个 defaultProps 对应的 propTypes 必须不是 required 的
        // 不强制要求写 propTypes，故关闭此条规则
        'react/default-props-match-prop-types': 'off',
        // React 组件必须有 displayName 属性
        // 不强制要求写 displayName，故关闭此条规则
        'react/display-name': 'off',
        // 可以禁止在自定义组件中使用一些设定的 props
        // 不强制要求，故关闭此规则
        'react/forbid-component-props': 'off',
        // 可以禁止使用一些设定的 elements
        // 不需要禁止，如果需要请在项目中单独设置
        'react/forbid-elements': 'off',
        // 可以禁止使用一些 propTypes
        // 不强制要求写 propTypes，故关闭此条规则
        'react/forbid-prop-types': 'off',
        // 禁止直接使用别的组建的 propTypes
        // 不强制要求写 propTypes，故关闭此条规则
        'react/forbid-foreign-prop-types': 'off',
        // 禁止使用数组的 index 作为 key
        // 太严格，故关闭此规则
        'react/no-array-index-key': 'off',
        // 禁止使用 children 做 props
        'react/no-children-prop': 'error',
        // 禁止使用 dangerouslySetInnerHTML
        'react/no-danger': 'off',
        // 禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children
        'react/no-danger-with-children': 'error',
        // 禁止使用已废弃的 api
        'react/no-deprecated': 'error',
        // 禁止在 componentDidMount 里面使用 setState
        // 同构应用需要在 didMount 里写 setState，故关闭此规则
        'react/no-did-mount-set-state': 'off',
        // 禁止在 componentDidUpdate 里面使用 setState
        'react/no-did-update-set-state': 'error',
        // 禁止直接修改 this.state
        'react/no-direct-mutation-state': 'error',
        // 禁止使用 findDOMNode
        'react/no-find-dom-node': 'error',
        // 禁止使用 isMounted
        'react/no-is-mounted': 'error',
        // 禁止在一个文件创建两个组件，有一个 bug，故暂时关闭
        // https://github.com/yannickcr/eslint-plugin-react/issues/1181
        'react/no-multi-comp': 'off',
        // 禁止在 PureComponent 中使用 shouldComponentUpdate
        'react/no-redundant-should-component-update': 'error',
        // 禁止使用 ReactDOM.render 的返回值
        'react/no-render-return-value': 'error',
        // 禁止使用 setState
        // 不需要禁止写 setState
        'react/no-set-state': 'off',
        // 禁止拼写错误 7.1.0 暂不支持，需要升级 eslint-plugin-react
        // 'react/no-typos': 'error',
        // 禁止使用字符串的 ref
        'react/no-string-refs': 'error',
        // 禁止在组件的内部存在未转义的 > " ' }
        'react/no-unescaped-entities': 'error',
        // 禁止出现 HTML 中的属性，如 class
        'react/no-unknown-property': 'error',
        // 禁止出现为使用的 propTypes
        // 不强制要求写 propTypes，故关闭此条规则
        'react/no-unused-prop-types': 'off',
        // 禁止在 componentWillUpdate 中使用 setState
        'react/no-will-update-set-state': 'error',
        // 推荐使用 Class 的形式创建组件
        'react/prefer-es6-class': [
            'error',
            'always'
        ],
        // 推荐使用 pure function
        // 不强制要求，故关闭此条规则
        'react/prefer-stateless-function': 'off',
        // React 组件必须写 propTypes
        // 不强制要求，故关闭此条规则
        'react/prop-types': 'off',
        // 出现 jsx 的地方必须 import React
        // 不强制要求，故关闭此条规则
        'react/react-in-jsx-scope': 'off',
        // 非 required 的 prop 必须有 defaultProps
        // 不强制要求，故关闭此条规则
        'react/require-default-props': 'off',
        // React 组件必须有 shouldComponentUpdate
        // 不强制要求，故关闭此条规则
        'react/require-optimization': 'off',
        // render 方法中必须有返回值
        'react/require-render-return': 'error',
        // 组件内没有 children 是，必须使用自闭和写法
        // 不强制要求，故关闭此条规则
        'react/self-closing-comp': 'off',
        // 组件内方法必须按照一定规则排序
        // 对 lifecycle 很友好，故开启此条规则
        'react/sort-comp': 'error',
        // propTypes 的熟悉必须按照字母排序
        // 不强制要求，故关闭此条规则
        'react/sort-prop-types': 'off',
        // style 属性的取值必须是 object
        // 符合 React 的规范，故开启此条规则
        'react/style-prop-object': 'error',
        // HTML 中的自闭和标签禁止有 children
        // 符合 React 的规范，故开启此条规则
        'react/void-dom-elements-no-children': 'error',
        // 布尔值的属性必须显式的写 someprop={true}
        // 不强制要求，故关闭此条规则
        'react/jsx-boolean-value': 'off',
        // 开始标签中的反尖括号必须与开始标签的那一行对齐
        // 很容易一眼看清格式，故开启此条规则
        'react/jsx-closing-bracket-location': [
            'error',
            {
                nonEmpty: false,
                selfClosing: 'line-aligned'
            }
        ],
        // 结束标签必须与开始标签的那一行对齐
        // jsx-indent 已经约束了这个，故关闭此规则
        'react/jsx-closing-tag-location': 'off',
        // 花括号内前后必须有空格
        // 与 es 统一规范，开启此规则
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
        // props 与 value 之间的等号前后禁止有空格
        // 与 html 规范一致，开启此规则
        'react/jsx-equals-spacing': [
            'error',
            'never'
        ],
        // 限制文件后缀
        // 不强制要求，故关闭此条规则
        'react/jsx-filename-extension': 'off',
        // 第一个 prop 必须的换行
        // 不强制要求，故关闭此条规则
        'react/jsx-first-prop-new-line': 'off',
        // handler 的名称必须是 onXXX 或 handleXXX
        // 不强制要求，故关闭此条规则
        'react/jsx-handler-names': 'off',
        // jsx 的 children 缩进必须为四个空格
        // 与 es 规范一致，开启此规则
        'react/jsx-indent': [
            'error',
            4
        ],
        // jsx 的 props 缩进必须为四个空格
        // 与 es 规范一致，故开启此规则
        'react/jsx-indent-props': [
            'error',
            4
        ],
        // 数组中的 jsx 必须有 key
        // 开启此规则，否则 React 会报错
        'react/jsx-key': 'error',
        // 限制每行的 props 数量
        // 不强制要求，故关闭此规则
        'react/jsx-max-props-per-line': 'off',
        // jsx 中禁止使用 bind
        // 太严格，关闭此规则
        'react/jsx-no-bind': 'off',
        // 禁止在 jsx 中使用像注释的字符串
        // 容易引起误导，故开启此规则
        'react/jsx-no-comment-textnodes': 'error',
        // 禁止出现重复的 props
        // 开启此规则
        'react/jsx-no-duplicate-props': 'error',
        // 禁止在 jsx 中出现字符串
        // 不强制要求，故关闭此条规则
        'react/jsx-no-literals': 'off',
        // 禁止使用 target="_blank"
        // 不强制要求，故关闭此条规则
        'react/jsx-no-target-blank': 'off',
        // 禁止使用未定义的 jsx elemet
        // 开启此规则
        'react/jsx-no-undef': 'error',
        // 禁止使用 pascal 写法的 jsx
        // 开启此规则
        'react/jsx-pascal-case': 'error',
        // props 必须排好序
        // 不强制要求，故关闭此条规则
        'react/jsx-sort-props': 'off',
        // jsx 的开始和闭合处禁止有空格
        // 开启此规则
        'react/jsx-tag-spacing': [
            'error',
            {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never'
            }
        ],
        // jsx 文件必须 import React
        // 开启此规则
        'react/jsx-uses-react': 'error',
        // 定义了的 jsx element 必须使用
        // 开启此规则
        'react/jsx-uses-vars': 'error',
        // 多行的 jsx 必须有括号包起来
        // 没必要，关闭此规则
        'react/jsx-wrap-multilines': 'off'
    }
}