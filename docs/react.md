## 目录

1. [react/boolean-prop-naming](#react/boolean-prop-naming)
1. [react/button-has-type](#react/button-has-type)
1. [react/default-props-match-prop-types](#react/default-props-match-prop-types)
1. [react/destructuring-assignment](#react/destructuring-assignment)
1. [react/display-name](#react/display-name)
1. [react/forbid-component-props](#react/forbid-component-props)
1. [react/forbid-dom-props](#react/forbid-dom-props)
1. [react/forbid-elements](#react/forbid-elements)
1. [react/forbid-foreign-prop-types](#react/forbid-foreign-prop-types)
1. [react/forbid-prop-types](#react/forbid-prop-types)
1. [react/no-access-state-in-setstate](#react/no-access-state-in-setstate)
1. [react/no-array-index-key](#react/no-array-index-key)
1. [react/no-danger](#react/no-danger)
1. [react/no-did-mount-set-state](#react/no-did-mount-set-state)
1. [react/no-multi-comp](#react/no-multi-comp)
1. [react/no-set-state](#react/no-set-state)
1. [react/no-this-in-sfc](#react/no-this-in-sfc)
1. [react/no-unknown-property](#react/no-unknown-property)
1. [react/no-unsafe](#react/no-unsafe)
1. [react/no-unused-prop-types](#react/no-unused-prop-types)
1. [react/no-unused-state](#react/no-unused-state)
1. [react/prefer-read-only-props](#react/prefer-read-only-props)
1. [react/prefer-stateless-function](#react/prefer-stateless-function)
1. [react/prop-types](#react/prop-types)
1. [react/react-in-jsx-scope](#react/react-in-jsx-scope)
1. [react/require-default-props](#react/require-default-props)
1. [react/require-optimization](#react/require-optimization)
1. [react/self-closing-comp](#react/self-closing-comp)
1. [react/sort-comp](#react/sort-comp)
1. [react/sort-prop-types](#react/sort-prop-types)
1. [react/state-in-constructor](#react/state-in-constructor)
1. [react/static-property-placement](#react/static-property-placement)
1. [react/jsx-boolean-value](#react/jsx-boolean-value)
1. [react/jsx-child-element-spacing](#react/jsx-child-element-spacing)
1. [react/jsx-closing-bracket-location](#react/jsx-closing-bracket-location)
1. [react/jsx-closing-tag-location](#react/jsx-closing-tag-location)
1. [react/jsx-curly-brace-presence](#react/jsx-curly-brace-presence)
1. [react/jsx-curly-spacing](#react/jsx-curly-spacing)
1. [react/jsx-equals-spacing](#react/jsx-equals-spacing)
1. [react/jsx-filename-extension](#react/jsx-filename-extension)
1. [react/jsx-first-prop-new-line](#react/jsx-first-prop-new-line)
1. [react/jsx-fragments](#react/jsx-fragments)
1. [react/jsx-handler-names](#react/jsx-handler-names)
1. [react/jsx-indent](#react/jsx-indent)
1. [react/jsx-indent-props](#react/jsx-indent-props)
1. [react/jsx-max-depth](#react/jsx-max-depth)
1. [react/jsx-max-props-per-line](#react/jsx-max-props-per-line)
1. [react/jsx-no-bind](#react/jsx-no-bind)
1. [react/jsx-no-literals](#react/jsx-no-literals)
1. [react/jsx-no-target-blank](#react/jsx-no-target-blank)
1. [react/jsx-one-expression-per-line](#react/jsx-one-expression-per-line)
1. [react/jsx-props-no-multi-spaces](#react/jsx-props-no-multi-spaces)
1. [react/jsx-props-no-spreading](#react/jsx-props-no-spreading)
1. [react/jsx-sort-default-props](#react/jsx-sort-default-props)
1. [react/jsx-sort-props](#react/jsx-sort-props)
1. [react/jsx-tag-spacing](#react/jsx-tag-spacing)
1. [react/jsx-wrap-multilines](#react/jsx-wrap-multilines)
1. [react/jsx-key](#react/jsx-key)
1. [react/jsx-no-comment-textnodes](#react/jsx-no-comment-textnodes)
1. [react/jsx-no-duplicate-props](#react/jsx-no-duplicate-props)
1. [react/jsx-no-undef](#react/jsx-no-undef)
1. [react/jsx-pascal-case](#react/jsx-pascal-case)
1. [react/jsx-uses-react](#react/jsx-uses-react)
1. [react/jsx-uses-vars](#react/jsx-uses-vars)
1. [react/no-children-prop](#react/no-children-prop)
1. [react/no-danger-with-children](#react/no-danger-with-children)
1. [react/no-deprecated](#react/no-deprecated)
1. [react/no-did-update-set-state](#react/no-did-update-set-state)
1. [react/no-direct-mutation-state](#react/no-direct-mutation-state)
1. [react/no-find-dom-node](#react/no-find-dom-node)
1. [react/no-is-mounted](#react/no-is-mounted)
1. [react/no-redundant-should-component-update](#react/no-redundant-should-component-update)
1. [react/no-render-return-value](#react/no-render-return-value)
1. [react/no-string-refs](#react/no-string-refs)
1. [react/no-typos](#react/no-typos)
1. [react/no-unescaped-entities](#react/no-unescaped-entities)
1. [react/no-will-update-set-state](#react/no-will-update-set-state)
1. [react/prefer-es6-class](#react/prefer-es6-class)
1. [react/require-render-return](#react/require-render-return)
1. [react/style-prop-object](#react/style-prop-object)
1. [react/void-dom-elements-no-children](#react/void-dom-elements-no-children)

### react/boolean-prop-naming

[React] 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头

不启用原因: 不强制要求写 propTypes

### react/button-has-type

[React] <button> 必须有 type 属性

### react/default-props-match-prop-types

[React] 一个 defaultProps 必须有对应的 propTypes

不启用原因: 不强制要求写 propTypes

### react/destructuring-assignment

[React] props state context 必须用解构赋值

### react/display-name

[React] 组件必须有 displayName 属性

不启用原因: 不强制要求写 displayName

### react/forbid-component-props

[React] 禁止在自定义组件中使用一些指定的 props

不启用原因: 没必要限制

### react/forbid-dom-props

[React] 禁止指定的 props

### react/forbid-elements

[React] 禁止使用一些指定的 elements

不启用原因: 没必要限制

### react/forbid-foreign-prop-types

[React] 禁止直接使用别的组建的 propTypes

不启用原因: 不强制要求写 propTypes

### react/forbid-prop-types

[React] 禁止使用一些指定的 propTypes

不启用原因: 不强制要求写 propTypes

### react/no-access-state-in-setstate

[React] 禁止在 setState 时使用 this.state

### react/no-array-index-key

[React] 禁止使用数组的 index 作为 key

不启用原因: 太严格了

### react/no-danger

[React] 禁止使用 dangerouslySetInnerHTML

不启用原因: 没必要限制

### react/no-did-mount-set-state

[React] 禁止在 componentDidMount 里面使用 setState

不启用原因: 同构应用需要在 didMount 里写 setState

### react/no-multi-comp

[React] 禁止在一个文件创建两个组件

不启用原因: 有一个 bug https://github.com/yannickcr/eslint-plugin-react/issues/1181

### react/no-set-state

[React] 禁止使用 setState

不启用原因: setState 很常用

### react/no-this-in-sfc

[React] 禁止在函数组件中使用 this

### react/no-unknown-property

[React] 禁止出现 HTML 中的属性，如 class

### react/no-unsafe

[React] 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate

### react/no-unused-prop-types

[React] 禁止出现未使用的 propTypes

不启用原因: 不强制要求写 propTypes

### react/no-unused-state

[React] 定义过的 state 必须使用

不启用原因: 没有官方文档，并且存在很多 bug： https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93

### react/prefer-read-only-props

[React] 使用 Flow 时，props 必须设置为只读的

### react/prefer-stateless-function

[React] 必须使用 pure function

不启用原因: 没必要限制

### react/prop-types

[React] 组件必须写 propTypes

不启用原因: 不强制要求写 propTypes

### react/react-in-jsx-scope

[React] 出现 jsx 的地方必须 import React

不启用原因: 已经在 no-undef 中限制了

### react/require-default-props

[React] 非 required 的 prop 必须有 defaultProps

不启用原因: 不强制要求写 propTypes

### react/require-optimization

[React] 组件必须有 shouldComponentUpdate

不启用原因: 没必要限制

### react/self-closing-comp

[React] 组件内没有 children 时，必须使用自闭和写法

不启用原因: 没必要限制

### react/sort-comp

[React] 组件内方法必须按照一定规则排序

### react/sort-prop-types

[React] propTypes 的熟悉必须按照字母排序

不启用原因: 没必要限制

### react/state-in-constructor

[React] 必须在构造函数中初始化 state

### react/static-property-placement

[React] 类的静态属性必须使用 static 关键字定义

### react/jsx-boolean-value

[JSX-specific] 布尔值的属性必须显式的写 someprop={true}

### react/jsx-child-element-spacing

[JSX-specific] 禁止兄弟元素之间有空格

### react/jsx-closing-bracket-location

[JSX-specific] 自闭和标签的反尖括号必须与尖括号的那一行对齐

### react/jsx-closing-tag-location

[JSX-specific] 结束标签必须与开始标签的那一行对齐

不启用原因: 已经在 jsx-indent 中限制了

### react/jsx-curly-brace-presence

[JSX-specific] 禁止 jsx 中使用无用的引号

### react/jsx-curly-spacing

[JSX-specific] 大括号内前后禁止有空格

```js
// bad 禁止大括号内前后有空格
let foo = <img width={100} />;
let bar = <div style={{ color: 'red' }} />;
```

```js
// good 大括号内前后必须没有空格
let foo = <img width={100} />;
let bar = <div style={{ color: 'red' }} />;
```

### react/jsx-equals-spacing

[JSX-specific] props 与 value 之间的等号前后禁止有空格

### react/jsx-filename-extension

[JSX-specific] 限制文件后缀

不启用原因: 没必要限制

### react/jsx-first-prop-new-line

[JSX-specific] 第一个 prop 必须得换行

不启用原因: 没必要限制

### react/jsx-fragments

[JSX-specific] 必须使用 React.Fragment 而不是 <></>

### react/jsx-handler-names

[JSX-specific] handler 的名称必须是 onXXX 或 handleXXX

不启用原因: 没必要限制

### react/jsx-indent

[JSX-specific] jsx 的 children 缩进必须为四个空格

### react/jsx-indent-props

[JSX-specific] jsx 的 props 缩进必须为四个空格

### react/jsx-max-depth

[JSX-specific] 限制 jsx 层级

### react/jsx-max-props-per-line

[JSX-specific] 限制每行的 props 数量

不启用原因: 没必要限制

### react/jsx-no-bind

[JSX-specific] jsx 中禁止使用 bind

不启用原因: 太严格了

### react/jsx-no-literals

[JSX-specific] 禁止在 jsx 中出现字符串

不启用原因: 没必要限制

### react/jsx-no-target-blank

[JSX-specific] 禁止使用 target="\_blank"

不启用原因: 没必要限制

### react/jsx-one-expression-per-line

[JSX-specific] 禁止有内容的元素写在一行内

### react/jsx-props-no-multi-spaces

[JSX-specific] 禁止出现多于的空格

### react/jsx-props-no-spreading

[JSX-specific] 禁止使用 {...props}

### react/jsx-sort-default-props

[JSX-specific] defaultProps 必须按字母排序

### react/jsx-sort-props

[JSX-specific] props 必须排好序

不启用原因: 没必要限制

### react/jsx-tag-spacing

[JSX-specific] jsx 的开始和闭合处禁止有空格

### react/jsx-wrap-multilines

[JSX-specific] 多行的 jsx 必须有括号包起来

不启用原因: 没必要限制

### react/jsx-key

数组中的 jsx 必须有 key

### react/jsx-no-comment-textnodes

禁止在 jsx 中使用像注释的字符串

### react/jsx-no-duplicate-props

禁止出现重复的 props

### react/jsx-no-undef

禁止使用未定义的 jsx elemet

### react/jsx-pascal-case

禁止使用 pascal 写法的 jsx，比如 <TEST_COMPONENT>

### react/jsx-uses-react

jsx 文件必须 import React

### react/jsx-uses-vars

定义了的 jsx element 必须使用

### react/no-children-prop

禁止使用 children 做 props

### react/no-danger-with-children

禁止在使用了 dangerouslySetInnerHTML 的组建内添加 children

### react/no-deprecated

禁止使用已废弃的 api

### react/no-did-update-set-state

禁止在 componentDidUpdate 里面使用 setState

### react/no-direct-mutation-state

禁止直接修改 this.state

### react/no-find-dom-node

禁止使用 findDOMNode

### react/no-is-mounted

禁止使用 isMounted

### react/no-redundant-should-component-update

禁止在 PureComponent 中使用 shouldComponentUpdate

### react/no-render-return-value

禁止使用 ReactDOM.render 的返回值

### react/no-string-refs

禁止使用字符串 ref

### react/no-typos

禁止拼写错误

### react/no-unescaped-entities

禁止在组件的内部存在未转义的 >, ", ' 或 }

### react/no-will-update-set-state

禁止在 componentWillUpdate 中使用 setState

### react/prefer-es6-class

必须使用 Class 的形式创建组件

### react/require-render-return

render 方法中必须有返回值

### react/style-prop-object

style 属性的取值必须是 object

### react/void-dom-elements-no-children

HTML 中的自闭和标签禁止有 children
