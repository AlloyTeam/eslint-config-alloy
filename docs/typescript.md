## 目录

1. [@typescript-eslint/indent](#@typescript-eslint/indent)
1. [@typescript-eslint/adjacent-overload-signatures](#@typescript-eslint/adjacent-overload-signatures)
1. [@typescript-eslint/array-type](#@typescript-eslint/array-type)
1. [@typescript-eslint/await-thenable](#@typescript-eslint/await-thenable)
1. [@typescript-eslint/ban-ts-ignore](#@typescript-eslint/ban-ts-ignore)
1. [@typescript-eslint/ban-types](#@typescript-eslint/ban-types)
1. [@typescript-eslint/camelcase](#@typescript-eslint/camelcase)
1. [@typescript-eslint/class-name-casing](#@typescript-eslint/class-name-casing)
1. [@typescript-eslint/explicit-function-return-type](#@typescript-eslint/explicit-function-return-type)
1. [@typescript-eslint/explicit-member-accessibility](#@typescript-eslint/explicit-member-accessibility)
1. [@typescript-eslint/func-call-spacing](#@typescript-eslint/func-call-spacing)
1. [@typescript-eslint/generic-type-naming](#@typescript-eslint/generic-type-naming)
1. [@typescript-eslint/interface-name-prefix](#@typescript-eslint/interface-name-prefix)
1. [@typescript-eslint/member-delimiter-style](#@typescript-eslint/member-delimiter-style)
1. [@typescript-eslint/member-naming](#@typescript-eslint/member-naming)
1. [@typescript-eslint/member-ordering](#@typescript-eslint/member-ordering)
1. [@typescript-eslint/no-angle-bracket-type-assertion](#@typescript-eslint/no-angle-bracket-type-assertion)
1. [@typescript-eslint/no-array-constructor](#@typescript-eslint/no-array-constructor)
1. [@typescript-eslint/no-empty-interface](#@typescript-eslint/no-empty-interface)
1. [@typescript-eslint/no-explicit-any](#@typescript-eslint/no-explicit-any)
1. [@typescript-eslint/no-extra-parens](#@typescript-eslint/no-extra-parens)
1. [@typescript-eslint/no-extraneous-class](#@typescript-eslint/no-extraneous-class)
1. [@typescript-eslint/no-for-in-array](#@typescript-eslint/no-for-in-array)
1. [@typescript-eslint/no-inferrable-types](#@typescript-eslint/no-inferrable-types)
1. [@typescript-eslint/no-magic-numbers](#@typescript-eslint/no-magic-numbers)
1. [@typescript-eslint/no-misused-new](#@typescript-eslint/no-misused-new)
1. [@typescript-eslint/no-namespace](#@typescript-eslint/no-namespace)
1. [@typescript-eslint/no-non-null-assertion](#@typescript-eslint/no-non-null-assertion)
1. [@typescript-eslint/no-object-literal-type-assertion](#@typescript-eslint/no-object-literal-type-assertion)
1. [@typescript-eslint/no-parameter-properties](#@typescript-eslint/no-parameter-properties)
1. [@typescript-eslint/no-require-imports](#@typescript-eslint/no-require-imports)
1. [@typescript-eslint/no-this-alias](#@typescript-eslint/no-this-alias)
1. [@typescript-eslint/no-triple-slash-reference](#@typescript-eslint/no-triple-slash-reference)
1. [@typescript-eslint/no-type-alias](#@typescript-eslint/no-type-alias)
1. [@typescript-eslint/no-unnecessary-qualifier](#@typescript-eslint/no-unnecessary-qualifier)
1. [@typescript-eslint/no-unnecessary-type-assertion](#@typescript-eslint/no-unnecessary-type-assertion)
1. [@typescript-eslint/no-unused-vars](#@typescript-eslint/no-unused-vars)
1. [@typescript-eslint/no-use-before-define](#@typescript-eslint/no-use-before-define)
1. [@typescript-eslint/no-useless-constructor](#@typescript-eslint/no-useless-constructor)
1. [@typescript-eslint/no-var-requires](#@typescript-eslint/no-var-requires)
1. [@typescript-eslint/prefer-for-of](#@typescript-eslint/prefer-for-of)
1. [@typescript-eslint/prefer-function-type](#@typescript-eslint/prefer-function-type)
1. [@typescript-eslint/prefer-includes](#@typescript-eslint/prefer-includes)
1. [@typescript-eslint/prefer-interface](#@typescript-eslint/prefer-interface)
1. [@typescript-eslint/prefer-namespace-keyword](#@typescript-eslint/prefer-namespace-keyword)
1. [@typescript-eslint/prefer-regexp-exec](#@typescript-eslint/prefer-regexp-exec)
1. [@typescript-eslint/prefer-string-starts-ends-with](#@typescript-eslint/prefer-string-starts-ends-with)
1. [@typescript-eslint/promise-function-async](#@typescript-eslint/promise-function-async)
1. [@typescript-eslint/require-array-sort-compare](#@typescript-eslint/require-array-sort-compare)
1. [@typescript-eslint/restrict-plus-operands](#@typescript-eslint/restrict-plus-operands)
1. [@typescript-eslint/semi](#@typescript-eslint/semi)
1. [@typescript-eslint/type-annotation-spacing](#@typescript-eslint/type-annotation-spacing)
1. [@typescript-eslint/unbound-method](#@typescript-eslint/unbound-method)
1. [@typescript-eslint/unified-signatures](#@typescript-eslint/unified-signatures)

### @typescript-eslint/indent

[Stylistic Issues] 一个缩进必须用四个空格替代

### @typescript-eslint/adjacent-overload-signatures

[TypeScript] 重载的函数必须写在一起

不启用原因: 增加可读性

### @typescript-eslint/array-type

[TypeScript] 限制数组类型必须使用 Array<T> 或 T[]

不启用原因: 允许灵活运用两者

### @typescript-eslint/await-thenable

[TypeScript] 禁止对没有 then 方法的对象使用 await

### @typescript-eslint/ban-ts-ignore

[TypeScript] 是否允许使用 // @ts-ignore 来忽略编译错误

不启用原因: 既然已经使用注释来忽略编译错误了，说明已经清楚可能带来的后果

### @typescript-eslint/ban-types

[TypeScript] 禁用特定的类型

不启用原因: 该规则用于禁止某个具体的类型的使用

### @typescript-eslint/camelcase

[TypeScript] 变量名必须是 camelcase 风格的

不启用原因: 很多 api 或文件名都不是 camelcase

### @typescript-eslint/class-name-casing

[TypeScript] 类名与接口名必须为驼峰式

### @typescript-eslint/explicit-function-return-type

[TypeScript] 函数返回值必须与声明的类型一致

不启用原因: 编译阶段检查就足够了

### @typescript-eslint/explicit-member-accessibility

[TypeScript] 必须设置类的成员的可访问性

不启用原因: 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好

### @typescript-eslint/func-call-spacing

[TypeScript] 函数名和执行它的括号之间禁止有空格

### @typescript-eslint/generic-type-naming

[TypeScript] 约束泛型的命名规则

### @typescript-eslint/interface-name-prefix

[TypeScript] 接口名称必须已 I 开头

### @typescript-eslint/member-delimiter-style

[TypeScript] 接口和类型别名的成员之间必须使用分号分隔

### @typescript-eslint/member-naming

[TypeScript] 私有成员必须以 \_ 开头

不启用原因: 已有 private 修饰符了，没必要限制变量名

### @typescript-eslint/member-ordering

[TypeScript] 指定类成员的排序规则

不启用原因: 优先级：

1. static > instance
2. field > constructor > method
3. public > protected > private

### @typescript-eslint/no-angle-bracket-type-assertion

[TypeScript] 类型断言必须使用 as Type，禁止使用 <Type>

不启用原因: <Type> 容易被理解为 jsx

### @typescript-eslint/no-array-constructor

[TypeScript] 禁止使用 Array 构造函数

### @typescript-eslint/no-empty-interface

[TypeScript] 禁止定义空的接口

### @typescript-eslint/no-explicit-any

[TypeScript] 禁止使用 any

### @typescript-eslint/no-extra-parens

[TypeScript] 禁止函数表达式中出现多余的括号

### @typescript-eslint/no-extraneous-class

[TypeScript] 禁止定义没必要的类，比如只有静态方法的类

### @typescript-eslint/no-for-in-array

[TypeScript] 禁止对 array 使用 for in 循环

### @typescript-eslint/no-inferrable-types

[TypeScript] 禁止给一个初始化时直接赋值为 number, string 的变量显式的指定类型

不启用原因: 可以简化代码

### @typescript-eslint/no-magic-numbers

[TypeScript] 禁止使用 magic numbers

### @typescript-eslint/no-misused-new

[TypeScript] 禁止在接口中定义 constructor，或在类中定义 new

### @typescript-eslint/no-namespace

[TypeScript] 禁止使用 namespace 来定义命名空间

不启用原因: 使用 es6 引入模块，才是更标准的方式。
允许使用 declare namespace ... {} 来定义外部命名空间

### @typescript-eslint/no-non-null-assertion

[TypeScript] 禁止使用 non-null 断言（感叹号）

不启用原因: 使用 non-null 断言时就已经清楚了风险

### @typescript-eslint/no-object-literal-type-assertion

[TypeScript] 禁止对对象字面量进行类型断言（断言成 any 是允许的）

### @typescript-eslint/no-parameter-properties

[TypeScript] 禁止给类的构造函数的参数添加修饰符

### @typescript-eslint/no-require-imports

[TypeScript] 禁止使用 require

不启用原因: 有时需要动态引入，还是需要用 require

### @typescript-eslint/no-this-alias

[TypeScript] 禁止将 this 赋值给其他变量，除非是解构赋值

### @typescript-eslint/no-triple-slash-reference

[TypeScript] 禁止使用三斜杠引入类型定义文件

不启用原因: 三斜杠是已废弃的语法

### @typescript-eslint/no-type-alias

[TypeScript] 禁止使用类型别名

### @typescript-eslint/no-unnecessary-qualifier

[TypeScript] 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀

不启用原因: 已经禁止使用命名空间了

### @typescript-eslint/no-unnecessary-type-assertion

[TypeScript] 禁止无用的类型断言

### @typescript-eslint/no-unused-vars

[TypeScript] 禁止出现未使用的变量

不启用原因: 编译阶段检查就足够了

### @typescript-eslint/no-use-before-define

[TypeScript] 禁止在定义变量之前就使用它

不启用原因: 编译阶段检查就足够了

### @typescript-eslint/no-useless-constructor

[TypeScript] 禁止出现没必要的 constructor

### @typescript-eslint/no-var-requires

[TypeScript] 禁止使用 require 来引入模块

不启用原因: 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入

### @typescript-eslint/prefer-for-of

[TypeScript] 使用 for 循环遍历数组时，如果 index 仅用于获取成员，则必须使用 for of 循环替代 for 循环

不启用原因: for of 循环更加易读

### @typescript-eslint/prefer-function-type

[TypeScript] 可以简写为函数类型的接口或字面类似，必须简写

不启用原因: reason

### @typescript-eslint/prefer-includes

[TypeScript] 使用 includes 而不是 indexOf

### @typescript-eslint/prefer-interface

[TypeScript] 优先使用接口而不是字面类型

不启用原因: 接口可以 implement extend 和 merge

### @typescript-eslint/prefer-namespace-keyword

[TypeScript] 禁止使用 module 来定义命名空间

不启用原因: module 已成为 js 的关键字

### @typescript-eslint/prefer-regexp-exec

[TypeScript] 使用 RegExp#exec 而不是 String#match

### @typescript-eslint/prefer-string-starts-ends-with

[TypeScript] 使用 String#startsWith 而不是其他方式

### @typescript-eslint/promise-function-async

[TypeScript] async 函数的返回值必须是 Promise

不启用原因: 有时 async 函数在某个分支是同步的，不需要返回 Promise

### @typescript-eslint/require-array-sort-compare

[TypeScript] 使用 sort 时必须传入比较函数

### @typescript-eslint/restrict-plus-operands

[TypeScript] 使用加号时，两者必须同为数字或同为字符串

### @typescript-eslint/semi

[TypeScript] 结尾必须有分号

### @typescript-eslint/type-annotation-spacing

[TypeScript] 类型定义的冒号前面必须没有空格，后面必须有一个空格

### @typescript-eslint/unbound-method

[TypeScript] 方法调用时需要绑定到正确的 this 上

### @typescript-eslint/unified-signatures

[TypeScript] 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
