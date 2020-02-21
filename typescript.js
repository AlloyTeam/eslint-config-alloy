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
 *     eslint ^6.7.1
 *     babel-eslint ^10.0.3
 *     eslint-plugin-react ^7.18.3
 *     vue-eslint-parser ^7.0.0
 *     eslint-plugin-vue ^6.2.1
 *     @typescript-eslint/parser ^2.20.0
 *     @typescript-eslint/eslint-plugin ^2.20.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @reason 为什么要开启（关闭）此规则
 */
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'no-dupe-class-members': 'off',
        'no-empty-function': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/issues/491
        'no-invalid-this': 'off',
        'no-magic-numbers': 'off',
        'no-unused-vars': 'off',
        'react/sort-comp': 'off',
        /**
         * 重载的函数必须写在一起
         * @reason 增加可读性
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @reason 允许灵活运用两者
         */
        '@typescript-eslint/array-type': 'off',
        /**
         * 禁止对没有 then 方法的对象使用 await
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/await-thenable': 'off',
        /**
         * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
         * @reason 这种注释本身就是对特殊代码的说明
         */
        '@typescript-eslint/ban-ts-comment': 'off',
        /**
         * 禁止使用指定的类型
         */
        '@typescript-eslint/ban-types': 'off',
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
            'error',
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never'
            }
        ],
        /**
         * 优先使用 interface 而不是 type
         * @reason interface 可以 implement, extend 和 merge
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        /**
         * 有默认值或可选的参数必须放到最后
         */
        '@typescript-eslint/default-param-last': 'off',
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/explicit-function-return-type': 'off',
        /**
         * 必须设置类的成员的可访问性
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         */
        '@typescript-eslint/explicit-member-accessibility': 'error',
        /**
         * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        /**
         * 指定类成员的排序规则
         * @reason 优先级：
         * 1. static > instance
         * 2. field > constructor > method
         * 3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
            'error',
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'static-method',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-field',
                    'protected-field',
                    'private-field',
                    'instance-field',
                    'field',
                    'constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-method',
                    'protected-method',
                    'private-method',
                    'instance-method',
                    'method'
                ]
            }
        ],
        /**
         * 限制各种变量或类型的命名规则
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/naming-convention': 'off',
        /**
         * 禁止使用 Array 构造函数
         */
        '@typescript-eslint/no-array-constructor': 'off',
        /**
         * 禁止重复定义类的成员
         * @reason 编译阶段就会报错了
         */
        '@typescript-eslint/no-dupe-class-members': 'off',
        /**
         * 禁止 delete 时传入的 key 是动态的
         */
        '@typescript-eslint/no-dynamic-delete': 'off',
        /**
         * 不允许有空函数
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        '@typescript-eslint/no-empty-function': 'off',
        /**
         * 禁止定义空的接口
         */
        '@typescript-eslint/no-empty-interface': 'error',
        /**
         * 禁止使用 any
         */
        '@typescript-eslint/no-explicit-any': 'off',
        /**
         * 禁止多余的 non-null 断言
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'off',
        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         */
        '@typescript-eslint/no-extraneous-class': 'off',
        /**
         * 禁止调用 Promise 时没有处理异常情况
         */
        '@typescript-eslint/no-floating-promises': 'off',
        /**
         * 禁止对 array 使用 for in 循环
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-for-in-array': 'off',
        /**
         * 禁止使用 eval
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-implied-eval': 'off',
        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @reason 可以简化代码
         */
        '@typescript-eslint/no-inferrable-types': 'error',
        /**
         * 禁止使用 magic numbers
         */
        '@typescript-eslint/no-magic-numbers': 'off',
        /**
         * 禁止在接口中定义 constructor，或在类中定义 new
         */
        '@typescript-eslint/no-misused-new': 'off',
        /**
         * 避免错误的使用 Promise
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-misused-promises': 'off',
        /**
         * 禁止使用 namespace 来定义命名空间
         * @reason 使用 es6 引入模块，才是更标准的方式。
         * 但是允许使用 declare namespace ... {} 来定义外部命名空间
         */
        '@typescript-eslint/no-namespace': [
            'error',
            {
                allowDeclarations: true,
                allowDefinitionFiles: true
            }
        ],
        /**
         * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
         * @reason optional chaining 后面的属性一定是非空的
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        /**
         * 禁止使用 non-null 断言（感叹号）
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',
        /**
         * 禁止给类的构造函数的参数添加修饰符
         */
        '@typescript-eslint/no-parameter-properties': 'error',
        /**
         * 禁止使用 require
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 'error',
        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值
         */
        '@typescript-eslint/no-this-alias': [
            'error',
            {
                allowDestructuring: true
            }
        ],
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-throw-literal': 'off',
        /**
         * 禁止使用类型别名
         */
        '@typescript-eslint/no-type-alias': 'off',
        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-condition': 'off',
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'off',
        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',
        /**
         * 禁止无用的类型断言
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        /**
         * 禁止无用的表达式
         */
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        /**
         * 已定义的变量必须使用
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/no-unused-vars': 'off',
        /**
         * 禁止已定义的变量未使用
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/no-unused-vars-experimental': 'off',
        /**
         * 禁止在定义变量之前就使用它
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/no-use-before-define': 'off',
        /**
         * 禁止出现没必要的 constructor
         */
        '@typescript-eslint/no-useless-constructor': 'error',
        /**
         * 禁止使用 require 来引入模块
         * @reason no-require-imports 规则已经约束了 require
         */
        '@typescript-eslint/no-var-requires': 'off',
        /**
         * 使用 as const 替代 as 'bar'
         * @reason as const 是新语法，不是很常见
         */
        '@typescript-eslint/prefer-as-const': 'off',
        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 'error',
        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         */
        '@typescript-eslint/prefer-function-type': 'error',
        /**
         * 使用 includes 而不是 indexOf
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-includes': 'off',
        /**
         * 禁止使用 module 来定义命名空间
         * @reason module 已成为 js 的关键字
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        /**
         * 使用 ?? 替代 ||
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        /**
         * 使用 optional chaining 替代 &&
         */
        '@typescript-eslint/prefer-optional-chain': 'error',
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-readonly': 'off',
        /**
         * 使用 RegExp#exec 而不是 String#match
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',
        /**
         * 使用 String#startsWith 而不是其他方式
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        /**
         * async 函数的返回值必须是 Promise
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/promise-function-async': 'off',
        /**
         * 使用 sort 时必须传入比较函数
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/require-array-sort-compare': 'off',
        /**
         * async 函数中必须存在 await 语句
         */
        '@typescript-eslint/require-await': 'off',
        /**
         * 使用加号时，两者必须同为数字或同为字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-plus-operands': 'off',
        /**
         * 模版字符串中的变量类型必须是字符串
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/restrict-template-expressions': 'off',
        /**
         * async 函数必须返回 await
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/return-await': 'off',
        /**
         * 条件判断必须传入布尔值
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',
        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        /**
         * 禁止使用三斜杠导入文件
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'never',
                types: 'always',
                lib: 'always'
            }
        ],
        /**
         * interface 和 type 定义时必须声明成员的类型
         */
        '@typescript-eslint/typedef': [
            'error',
            {
                arrayDestructuring: false,
                arrowParameter: false,
                memberVariableDeclaration: false,
                objectDestructuring: false,
                parameter: false,
                propertyDeclaration: true,
                variableDeclaration: false
            }
        ],
        /**
         * 方法调用时需要绑定到正确的 this 上
         * @reason 统一关闭 requires type information 的规则
         */
        '@typescript-eslint/unbound-method': 'off',
        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         */
        '@typescript-eslint/unified-signatures': 'error'
    }
};
