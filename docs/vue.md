## 目录

1. [vue/comment-directive](#vue/comment-directive)
1. [vue/jsx-uses-vars](#vue/jsx-uses-vars)
1. [vue/no-async-in-computed-properties](#vue/no-async-in-computed-properties)
1. [vue/no-dupe-keys](#vue/no-dupe-keys)
1. [vue/no-duplicate-attributes](#vue/no-duplicate-attributes)
1. [vue/no-parsing-error](#vue/no-parsing-error)
1. [vue/no-reserved-keys](#vue/no-reserved-keys)
1. [vue/no-shared-component-data](#vue/no-shared-component-data)
1. [vue/no-side-effects-in-computed-properties](#vue/no-side-effects-in-computed-properties)
1. [vue/no-template-key](#vue/no-template-key)
1. [vue/no-textarea-mustache](#vue/no-textarea-mustache)
1. [vue/no-unused-components](#vue/no-unused-components)
1. [vue/no-unused-vars](#vue/no-unused-vars)
1. [vue/no-use-v-if-with-v-for](#vue/no-use-v-if-with-v-for)
1. [vue/require-component-is](#vue/require-component-is)
1. [vue/require-prop-type-constructor](#vue/require-prop-type-constructor)
1. [vue/require-render-return](#vue/require-render-return)
1. [vue/require-v-for-key](#vue/require-v-for-key)
1. [vue/require-valid-default-prop](#vue/require-valid-default-prop)
1. [vue/return-in-computed-property](#vue/return-in-computed-property)
1. [vue/use-v-on-exact](#vue/use-v-on-exact)
1. [vue/valid-template-root](#vue/valid-template-root)
1. [vue/valid-v-bind](#vue/valid-v-bind)
1. [vue/valid-v-cloak](#vue/valid-v-cloak)
1. [vue/valid-v-else](#vue/valid-v-else)
1. [vue/valid-v-else-if](#vue/valid-v-else-if)
1. [vue/valid-v-for](#vue/valid-v-for)
1. [vue/valid-v-html](#vue/valid-v-html)
1. [vue/valid-v-if](#vue/valid-v-if)
1. [vue/valid-v-model](#vue/valid-v-model)
1. [vue/valid-v-on](#vue/valid-v-on)
1. [vue/valid-v-once](#vue/valid-v-once)
1. [vue/valid-v-pre](#vue/valid-v-pre)
1. [vue/valid-v-show](#vue/valid-v-show)
1. [vue/valid-v-text](#vue/valid-v-text)
1. [vue/attribute-hyphenation](#vue/attribute-hyphenation)
1. [vue/html-closing-bracket-newline](#vue/html-closing-bracket-newline)
1. [vue/html-closing-bracket-spacing](#vue/html-closing-bracket-spacing)
1. [vue/html-end-tags](#vue/html-end-tags)
1. [vue/html-indent](#vue/html-indent)
1. [vue/html-quotes](#vue/html-quotes)
1. [vue/html-self-closing](#vue/html-self-closing)
1. [vue/max-attributes-per-line](#vue/max-attributes-per-line)
1. [vue/multiline-html-element-content-newline](#vue/multiline-html-element-content-newline)
1. [vue/mustache-interpolation-spacing](#vue/mustache-interpolation-spacing)
1. [vue/name-property-casing](#vue/name-property-casing)
1. [vue/no-multi-spaces](#vue/no-multi-spaces)
1. [vue/no-spaces-around-equal-signs-in-attribute](#vue/no-spaces-around-equal-signs-in-attribute)
1. [vue/no-template-shadow](#vue/no-template-shadow)
1. [vue/prop-name-casing](#vue/prop-name-casing)
1. [vue/require-default-prop](#vue/require-default-prop)
1. [vue/require-prop-types](#vue/require-prop-types)
1. [vue/singleline-html-element-content-newline](#vue/singleline-html-element-content-newline)
1. [vue/v-bind-style](#vue/v-bind-style)
1. [vue/v-on-style](#vue/v-on-style)
1. [vue/attributes-order](#vue/attributes-order)
1. [vue/no-v-html](#vue/no-v-html)
1. [vue/order-in-components](#vue/order-in-components)
1. [vue/this-in-template](#vue/this-in-template)
1. [vue/array-bracket-spacing](#vue/array-bracket-spacing)
1. [vue/arrow-spacing](#vue/arrow-spacing)
1. [vue/block-spacing](#vue/block-spacing)
1. [vue/brace-style](#vue/brace-style)
1. [vue/camelcase](#vue/camelcase)
1. [vue/comma-dangle](#vue/comma-dangle)
1. [vue/component-name-in-template-casing](#vue/component-name-in-template-casing)
1. [vue/eqeqeq](#vue/eqeqeq)
1. [vue/key-spacing](#vue/key-spacing)
1. [vue/match-component-file-name](#vue/match-component-file-name)
1. [vue/no-boolean-default](#vue/no-boolean-default)
1. [vue/no-restricted-syntax](#vue/no-restricted-syntax)
1. [vue/object-curly-spacing](#vue/object-curly-spacing)
1. [vue/require-direct-export](#vue/require-direct-export)
1. [vue/script-indent](#vue/script-indent)
1. [vue/space-infix-ops](#vue/space-infix-ops)
1. [vue/space-unary-ops](#vue/space-unary-ops)
1. [vue/v-on-function-call](#vue/v-on-function-call)

### vue/comment-directive

[Enabling Correct ESLint Parsing] 支持在模版中使用 eslint-disable-next-line 等注释

### vue/jsx-uses-vars

[Enabling Correct ESLint Parsing] 定义了的 jsx element 必须使用

### vue/no-async-in-computed-properties

[Error Prevention] 计算属性禁止包含异步方法

### vue/no-dupe-keys

[Error Prevention] 禁止重复的二级键名

不启用原因: 没必要限制

### vue/no-duplicate-attributes

[Error Prevention] 禁止出现重复的属性

### vue/no-parsing-error

[Error Prevention] 禁止出现语法错误

### vue/no-reserved-keys

[Error Prevention] 禁止覆盖保留字

### vue/no-shared-component-data

[Error Prevention] 组件的 data 属性的值必须是一个函数

不启用原因: 没必要限制

### vue/no-side-effects-in-computed-properties

[Error Prevention] 禁止在计算属性中对属性修改

不启用原因: 太严格了

### vue/no-template-key

[Error Prevention] 禁止 <template> 使用 key 属性

不启用原因: 太严格了

### vue/no-textarea-mustache

[Error Prevention] 禁止在 <textarea> 中出现 {{message}}

### vue/no-unused-components

[Error Prevention] 禁止定义在 components 中的组件未使用

### vue/no-unused-vars

[Error Prevention] 禁止模版中定义的变量未使用

### vue/no-use-v-if-with-v-for

[Error Prevention] 禁止在同一个元素上使用 v-if 和 v-for 指令

### vue/require-component-is

[Error Prevention] <component> 必须有 v-bind:is

### vue/require-prop-type-constructor

[Error Prevention] props 的取值必须是构造函数

### vue/require-render-return

[Error Prevention] render 函数必须有返回值

### vue/require-v-for-key

[Error Prevention] v-for 指令的元素必须有 v-bind:key

### vue/require-valid-default-prop

[Error Prevention] prop 的默认值必须匹配它的类型

不启用原因: 太严格了

### vue/return-in-computed-property

[Error Prevention] 计算属性必须有返回值

### vue/use-v-on-exact

[Error Prevention] 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact

### vue/valid-template-root

[Error Prevention] template 的根节点必须合法

### vue/valid-v-bind

[Error Prevention] v-bind 指令必须合法

### vue/valid-v-cloak

[Error Prevention] v-cloak 指令必须合法

### vue/valid-v-else

[Error Prevention] v-else 指令必须合法

### vue/valid-v-else-if

[Error Prevention] v-else-if 指令必须合法

### vue/valid-v-for

[Error Prevention] v-for 指令必须合法

### vue/valid-v-html

[Error Prevention] v-html 指令必须合法

### vue/valid-v-if

[Error Prevention] v-if 指令必须合法

### vue/valid-v-model

[Error Prevention] v-model 指令必须合法

### vue/valid-v-on

[Error Prevention] v-on 指令必须合法

### vue/valid-v-once

[Error Prevention] v-once 指令必须合法

### vue/valid-v-pre

[Error Prevention] v-pre 指令必须合法

### vue/valid-v-show

[Error Prevention] v-show 指令必须合法

### vue/valid-v-text

[Error Prevention] v-text 指令必须合法

### vue/attribute-hyphenation

[Improving Readability] 限制自定义组件的属性风格

不启用原因: 没必要限制

### vue/html-closing-bracket-newline

[Improving Readability] 模版中开始标签的反尖括号必须换行

### vue/html-closing-bracket-spacing

[Improving Readability] 模版中开始标签的反尖括号前禁止有空格，自闭和标签前必须有空格

### vue/html-end-tags

[Improving Readability] html 的结束标签必须符合规定

不启用原因: 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的

### vue/html-indent

[Improving Readability] 模版中使用 4 个空格缩进

### vue/html-quotes

[Improving Readability] html 属性值必须用双引号括起来

### vue/html-self-closing

[Improving Readability] 没有内容时，组件必须自闭和

不启用原因: 没必要限制

### vue/max-attributes-per-line

[Improving Readability] 限制每行允许的最多属性数量

不启用原因: 没必要限制

### vue/multiline-html-element-content-newline

[Improving Readability] 多行内容或多行标签时，内容前必须换行

### vue/mustache-interpolation-spacing

[Improving Readability] 模版内 mustache 大括号内前后禁止有空格

### vue/name-property-casing

[Improving Readability] 限制组件的 name 属性的值的风格

不启用原因: 没必要限制

### vue/no-multi-spaces

[Improving Readability] 禁止出现连续空格

### vue/no-spaces-around-equal-signs-in-attribute

[Improving Readability] 属性的等号前后禁止有空格

### vue/no-template-shadow

[Improving Readability] 模版中的变量名禁止与前一个作用域重名

### vue/prop-name-casing

[Improving Readability] props 必须用驼峰式

### vue/require-default-prop

[Improving Readability] props 如果不是 required 的字段，必须有默认值

### vue/require-prop-types

[Improving Readability] prop 必须有类型限制

不启用原因: 没必要限制

### vue/singleline-html-element-content-newline

[Improving Readability] 单行标签内容必须换行

### vue/v-bind-style

[Improving Readability] 限制 v-bind 的风格

不启用原因: 没必要限制

### vue/v-on-style

[Improving Readability] 限制 v-on 的风格

不启用原因: 没必要限制

### vue/attributes-order

[Minimizing Arbitrary Choices and Cognitive Overhead] 标签属性必须按规则排序

### vue/no-v-html

[Minimizing Arbitrary Choices and Cognitive Overhead] 禁用 v-html

### vue/order-in-components

[Minimizing Arbitrary Choices and Cognitive Overhead] 组件的属性必须为一定的顺序

### vue/this-in-template

[Minimizing Arbitrary Choices and Cognitive Overhead] 禁止在模版中用 this

### vue/array-bracket-spacing

[Uncategorized] 数组的括号内的前后禁止有空格

### vue/arrow-spacing

[Uncategorized] 箭头函数的箭头前后必须有空格

### vue/block-spacing

[Uncategorized] 代码块如果在一行内，那么大括号内的首尾必须有空格

### vue/brace-style

[Uncategorized] if 与 else 的大括号风格必须一致

不启用原因: else 代码块可能前面需要有一行注释

### vue/camelcase

[Uncategorized] 变量名必须是 camelcase 风格的

不启用原因: 很多 api 或文件名都不是 camelcase

### vue/comma-dangle

[Uncategorized] 对象的最后一个属性末尾必须有逗号

### vue/component-name-in-template-casing

[Uncategorized] 约束自定义标签的命名规则

### vue/eqeqeq

[Uncategorized] 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外

### vue/key-spacing

[Uncategorized] 对象字面量中冒号前面禁止有空格，后面必须有空格

### vue/match-component-file-name

[Uncategorized] 组件名称必须和文件名一致

### vue/no-boolean-default

[Uncategorized] 禁止给布尔值 props 添加默认值

### vue/no-restricted-syntax

[Uncategorized] 禁止使用特定的语法

不启用原因: 它用于限制某个具体的语法不能使用

### vue/object-curly-spacing

[Uncategorized] 对象字面量只有一行时，大括号内的首尾必须有空格

### vue/require-direct-export

[Uncategorized] 禁止手动 export default

### vue/script-indent

[Uncategorized] 一个缩进必须用四个空格替代

### vue/space-infix-ops

[Uncategorized] 操作符左右必须有空格

### vue/space-unary-ops

[Uncategorized] new, typeof 等后面必须有空格，++, -- 等禁止有空格

### vue/v-on-function-call

[Uncategorized] 禁止在 v-on 的值中调用函数
