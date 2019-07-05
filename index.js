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
    extends: ['./base.js'],
    rules: {
        /**
         * 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
         * @category Possible Errors
         */
        'for-direction': 'error',
        /**
         * getter 必须有返回值，并且禁止返回空，比如 return;
         * @category Possible Errors
         */
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        /**
         * 禁止将 async 函数做为 new Promise 的回调函数
         * @category Possible Errors
         * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
         */
        'no-async-promise-executor': 'error',
        /**
         * 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
         * @category Possible Errors
         * @reason 要求太严格了，有时需要在循环中写 await
         */
        'no-await-in-loop': 'off',
        /**
         * 禁止与负零进行比较
         * @category Possible Errors
         */
        'no-compare-neg-zero': 'error',
        /**
         * 禁止在测试表达式中使用赋值语句，除非这个赋值语句被括号包起来了
         * @category Possible Errors
         */
        'no-cond-assign': ['error', 'except-parens'],
        /**
         * 禁止使用 console
         * @category Possible Errors
         * @reason console 的使用很常见
         */
        'no-console': 'off',
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         * @category Possible Errors
         */
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        /**
         * 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
         * @category Possible Errors
         * @reason 几乎不会遇到这种场景
         */
        'no-control-regex': 'off',
        /**
         * 禁止使用 debugger
         * @category Possible Errors
         */
        'no-debugger': 'error',
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @category Possible Errors
         * @reason 使用 babel 时，在编译阶段就会报错了
         */
        'no-dupe-args': 'off',
        /**
         * 禁止在对象字面量中出现重复名称的键名
         * @category Possible Errors
         */
        'no-dupe-keys': 'error',
        /**
         * 禁止在 switch 语句中出现重复测试表达式的 case
         * @category Possible Errors
         */
        'no-duplicate-case': 'error',
        /**
         * 禁止出现空代码块，允许 catch 为空代码块
         * @category Possible Errors
         */
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        /**
         * 禁止在正则表达式中使用空的字符集 []
         * @category Possible Errors
         */
        'no-empty-character-class': 'error',
        /**
         * 禁止将 catch 的第一个参数 error 重新赋值
         * @category Possible Errors
         */
        'no-ex-assign': 'error',
        /**
         * 禁止不必要的布尔类型转换，比如 !! 或 Boolean
         * @category Possible Errors
         * @fixable
         */
        'no-extra-boolean-cast': 'error',
        /**
         * 禁止函数表达式中出现多余的括号
         * @category Possible Errors
         * @fixable
         */
        'no-extra-parens': ['error', 'functions'],
        /**
         * 禁止出现多余的分号
         * @category Possible Errors
         * @fixable
         */
        'no-extra-semi': 'error',
        /**
         * 禁止将一个函数声明重新赋值，如：
         * @category Possible Errors
         */
        'no-func-assign': 'error',
        /**
         * 禁止在 if 代码块内出现函数声明
         * @category Possible Errors
         */
        'no-inner-declarations': ['error', 'both'],
        /**
         * 禁止在 RegExp 构造函数中出现非法的正则表达式
         * @category Possible Errors
         */
        'no-invalid-regexp': 'error',
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
         * @category Possible Errors
         */
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],
        /**
         * 禁止正则表达式中使用肉眼无法区分的特殊字符
         * @category Possible Errors
         * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
         */
        'no-misleading-character-class': 'error',
        /**
         * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
         * @category Possible Errors
         */
        'no-obj-calls': 'error',
        /**
         * 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
         * @category Possible Errors
         * @reason hasOwnProperty 比较常用
         */
        'no-prototype-builtins': 'off',
        /**
         * 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
         * @category Possible Errors
         * @fixable
         */
        'no-regex-spaces': 'error',
        /**
         * 禁止在数组中出现连续的逗号，如 let foo = [,,]
         * @category Possible Errors
         */
        'no-sparse-arrays': 'error',
        /**
         * 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
         * @category Possible Errors
         */
        'no-template-curly-in-string': 'error',
        /**
         * 禁止出现难以理解的多行表达式
         * @category Possible Errors
         */
        'no-unexpected-multiline': 'error',
        /**
         * 禁止在 return, throw, break 或 continue 之后还有代码
         * @category Possible Errors
         */
        'no-unreachable': 'error',
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @category Possible Errors
         */
        'no-unsafe-finally': 'error',
        /**
         * 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
         * @category Possible Errors
         * @fixable
         */
        'no-unsafe-negation': 'error',
        /**
         * 禁止将 await 或 yield 的结果做为运算符的后面项
         * @category Possible Errors
         * @reason 这样会导致不符合预期的结果
         */
        'require-atomic-updates': 'error',
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         * @category Possible Errors
         */
        'use-isnan': 'error',
        /**
         * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
         * @category Possible Errors
         */
        'valid-typeof': 'error',
        /**
         * setter 必须有对应的 getter，getter 可以没有对应的 setter
         * @category Best Practices
         */
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        /**
         * 数组的方法除了 forEach 之外，回调函数必须有返回值
         * @category Best Practices
         */
        'array-callback-return': 'error',
        /**
         * 将 var 定义的变量视为块作用域，禁止在块外使用
         * @category Best Practices
         */
        'block-scoped-var': 'error',
        /**
         * 在类的非静态方法中，必须存在对 this 的引用
         * @category Best Practices
         * @reason 太严格了
         */
        'class-methods-use-this': 'off',
        /**
         * 禁止函数的循环复杂度超过 20，https://en.wikipedia.org/wiki/Cyclomatic_complexity
         * @category Best Practices
         */
        complexity: [
            'error',
            {
                max: 20
            }
        ],
        /**
         * 禁止函数在不同分支返回不同类型的值
         * @category Best Practices
         * @reason 太严格了
         */
        'consistent-return': 'off',
        /**
         * if 后面必须要有 {，除非是单行 if
         * @category Best Practices
         * @fixable
         */
        curly: ['error', 'multi-line', 'consistent'],
        /**
         * switch 语句必须有 default
         * @category Best Practices
         * @reason 太严格了
         */
        'default-case': 'off',
        /**
         * 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
         * @category Best Practices
         * @fixable
         */
        'dot-location': ['error', 'property'],
        /**
         * 禁止出现 foo['bar']，必须写成 foo.bar
         * @category Best Practices
         * @reason 当需要写一系列属性的时候，可以更统一
         * @fixable
         */
        'dot-notation': 'off',
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
         * @category Best Practices
         * @fixable
         */
        eqeqeq: [
            'error',
            'always',
            {
                null: 'ignore'
            }
        ],
        /**
         * for in 内部必须有 hasOwnProperty
         * @category Best Practices
         */
        'guard-for-in': 'error',
        /**
         * 限制一个文件中类的数量
         * @category Best Practices
         */
        'max-classes-per-file': 'off',
        /**
         * 禁止使用 alert
         * @category Best Practices
         * @reason alert 很常用
         */
        'no-alert': 'off',
        /**
         * 禁止使用 caller 或 callee
         * @category Best Practices
         */
        'no-caller': 'error',
        /**
         * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
         * @category Best Practices
         */
        'no-case-declarations': 'error',
        /**
         * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
         * @category Best Practices
         * @reason 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
         */
        'no-div-regex': 'off',
        /**
         * 禁止在 else 内使用 return，必须改为提前结束
         * @category Best Practices
         * @reason else 中使用 return 可以使代码结构更清晰
         * @fixable
         */
        'no-else-return': 'off',
        /**
         * 不允许有空函数
         * @category Best Practices
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        'no-empty-function': 'off',
        /**
         * 禁止解构中出现空 {} 或 []
         * @category Best Practices
         */
        'no-empty-pattern': 'error',
        /**
         * 禁止使用 foo == null，必须使用 foo === null
         * @category Best Practices
         * @reason foo == null 比较常用，可以用于判断 foo 不是 undefined 并且不是 null，故允许此写法
         */
        'no-eq-null': 'off',
        /**
         * 禁止使用 eval
         * @category Best Practices
         */
        'no-eval': 'error',
        /**
         * 禁止修改原生对象
         * @category Best Practices
         */
        'no-extend-native': 'error',
        /**
         * 禁止出现没必要的 bind
         * @category Best Practices
         * @fixable
         */
        'no-extra-bind': 'error',
        /**
         * 禁止出现没必要的 label
         * @category Best Practices
         * @fixable
         */
        'no-extra-label': 'error',
        /**
         * switch 的 case 内必须有 break, return 或 throw
         * @category Best Practices
         */
        'no-fallthrough': 'error',
        /**
         * 表示小数时，禁止省略 0，比如 .5
         * @category Best Practices
         * @fixable
         */
        'no-floating-decimal': 'error',
        /**
         * 禁止对全局变量赋值
         * @category Best Practices
         */
        'no-global-assign': 'error',
        /**
         * 禁止使用 !! ~ 等难以理解的运算符，仅允许使用 !!
         * @category Best Practices
         * @fixable
         */
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!']
            }
        ],
        /**
         * 禁止在全局作用域下定义变量或申明函数
         * @category Best Practices
         */
        'no-implicit-globals': 'error',
        /**
         * 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
         * @category Best Practices
         */
        'no-implied-eval': 'error',
        /**
         * 禁止在类之外的地方使用 this
         * @category Best Practices
         * @reason this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
         */
        'no-invalid-this': 'off',
        /**
         * 禁止使用 __iterator__
         * @category Best Practices
         */
        'no-iterator': 'error',
        /**
         * 禁止使用 label
         * @category Best Practices
         */
        'no-labels': 'error',
        /**
         * 禁止使用没必要的 {} 作为代码块
         * @category Best Practices
         */
        'no-lone-blocks': 'error',
        /**
         * 禁止在循环内的函数中出现循环体条件语句中定义的变量
         * @category Best Practices
         */
        'no-loop-func': 'error',
        /**
         * 禁止使用 magic numbers
         * @category Best Practices
         */
        'no-magic-numbers': 'off',
        /**
         * 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
         * @category Best Practices
         * @fixable
         */
        'no-multi-spaces': [
            'error',
            {
                ignoreEOLComments: true,
                exceptions: {
                    Property: true,
                    BinaryExpression: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true
                }
            }
        ],
        /**
         * 禁止使用 \ 来换行字符串
         * @category Best Practices
         */
        'no-multi-str': 'error',
        /**
         * 禁止直接 new 一个类而不赋值
         * @category Best Practices
         */
        'no-new': 'error',
        /**
         * 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
         * @category Best Practices
         */
        'no-new-func': 'error',
        /**
         * 禁止使用 new 来生成 String, Number 或 Boolean
         * @category Best Practices
         */
        'no-new-wrappers': 'error',
        /**
         * 禁止使用 0 开头的数字表示八进制数
         * @category Best Practices
         */
        'no-octal': 'error',
        /**
         * 禁止使用八进制的转义符
         * @category Best Practices
         */
        'no-octal-escape': 'error',
        /**
         * 禁止对函数的参数重新赋值
         * @category Best Practices
         */
        'no-param-reassign': 'error',
        /**
         * 禁止使用 __proto__
         * @category Best Practices
         */
        'no-proto': 'error',
        /**
         * 禁止重复定义变量
         * @category Best Practices
         */
        'no-redeclare': 'error',
        /**
         * 禁止使用指定的对象属性
         * @category Best Practices
         * @reason 它用于限制某个具体的 api 不能使用
         */
        'no-restricted-properties': 'off',
        /**
         * 禁止在 return 语句里赋值
         * @category Best Practices
         */
        'no-return-assign': ['error', 'always'],
        /**
         * 禁止在 return 语句里使用 await
         * @category Best Practices
         */
        'no-return-await': 'error',
        /**
         * 禁止出现 location.href = 'javascript:void(0)';
         * @category Best Practices
         * @reason 有些场景下还是需要用到这个
         */
        'no-script-url': 'off',
        /**
         * 禁止将自己赋值给自己
         * @category Best Practices
         */
        'no-self-assign': 'error',
        /**
         * 禁止将自己与自己比较
         * @category Best Practices
         */
        'no-self-compare': 'error',
        /**
         * 禁止使用逗号操作符
         * @category Best Practices
         */
        'no-sequences': 'error',
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         * @category Best Practices
         */
        'no-throw-literal': 'error',
        /**
         * 循环内必须对循环条件的变量有修改
         * @category Best Practices
         */
        'no-unmodified-loop-condition': 'error',
        /**
         * 禁止无用的表达式
         * @category Best Practices
         */
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        /**
         * 禁止出现没用的 label
         * @category Best Practices
         * @fixable
         */
        'no-unused-labels': 'error',
        /**
         * 禁止出现没必要的 call 或 apply
         * @category Best Practices
         */
        'no-useless-call': 'error',
        /**
         * 禁止在 catch 中仅仅只是把错误 throw 出去
         * @category Best Practices
         * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
         */
        'no-useless-catch': 'error',
        /**
         * 禁止出现没必要的字符串连接
         * @category Best Practices
         */
        'no-useless-concat': 'error',
        /**
         * 禁止出现没必要的转义
         * @category Best Practices
         * @reason 转义可以使代码更易懂
         */
        'no-useless-escape': 'off',
        /**
         * 禁止没必要的 return
         * @category Best Practices
         * @reason 没必要限制 return
         * @fixable
         */
        'no-useless-return': 'off',
        /**
         * 禁止使用 void
         * @category Best Practices
         */
        'no-void': 'error',
        /**
         * 禁止注释中出现 TODO 和 FIXME
         * @category Best Practices
         * @reason TODO 很常用
         */
        'no-warning-comments': 'off',
        /**
         * 禁止使用 with
         * @category Best Practices
         */
        'no-with': 'error',
        /**
         * 使用 ES2018 中的正则表达式命名组
         * @category Best Practices
         * @reason 正则表达式已经较难理解了，没必要强制加上命名组
         */
        'prefer-named-capture-group': 'off',
        /**
         * Promise 的 reject 中必须传入 Error 对象，而不是字面量
         * @category Best Practices
         */
        'prefer-promise-reject-errors': 'error',
        /**
         * parseInt 必须传入第二个参数
         * @category Best Practices
         */
        radix: 'error',
        /**
         * async 函数中必须存在 await 语句
         * @category Best Practices
         * @reason async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法
         */
        'require-await': 'off',
        /**
         * 正则表达式中必须要加上 u 标志
         * @category Best Practices
         */
        'require-unicode-regexp': 'off',
        /**
         * var 必须在作用域的最前面
         * @category Best Practices
         * @reason var 不在最前面也是很常见的用法
         */
        'vars-on-top': 'off',
        /**
         * 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
         * @category Best Practices
         * @fixable
         */
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true
            }
        ],
        /**
         * 必须使用 if (foo === 5) 而不是 if (5 === foo)
         * @category Best Practices
         * @fixable
         */
        yoda: [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ],
        /**
         * 禁止使用 'strict';
         * @category Strict Mode
         * @fixable
         */
        strict: ['error', 'never'],
        /**
         * 变量必须在定义的时候赋值
         * @category Variables
         * @reason 先定义后赋值很常见
         */
        'init-declarations': 'off',
        /**
         * 禁止使用 delete
         * @category Variables
         */
        'no-delete-var': 'error',
        /**
         * 禁止 label 名称与定义过的变量重复
         * @category Variables
         */
        'no-label-var': 'error',
        /**
         * 禁止使用指定的全局变量
         * @category Variables
         * @reason 它用于限制某个具体的变量名不能使用
         */
        'no-restricted-globals': 'off',
        /**
         * 禁止变量名与上层作用域内的定义过的变量重复
         * @category Variables
         * @reason 很多时候函数的形参和传参是同名的
         */
        'no-shadow': 'off',
        /**
         * 禁止使用保留字作为变量名
         * @category Variables
         */
        'no-shadow-restricted-names': 'error',
        /**
         * 禁止使用未定义的变量
         * @category Variables
         */
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        /**
         * 禁止将 undefined 赋值给变量
         * @category Variables
         * @fixable
         */
        'no-undef-init': 'error',
        /**
         * 禁止使用 undefined
         * @category Variables
         */
        'no-undefined': 'off',
        /**
         * 定义过的变量必须使用
         * @category Variables
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none',
                ignoreRestSiblings: true
            }
        ],
        /**
         * 变量必须先定义后使用
         * @category Variables
         */
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],
        /**
         * callback 之后必须立即 return
         * @category Node.js and CommonJS
         * @reason Limitations 太多了
         */
        'callback-return': 'off',
        /**
         * require 必须在全局作用域下
         * @category Node.js and CommonJS
         * @reason 条件加载很常见
         */
        'global-require': 'off',
        /**
         * callback 中的 error 必须被处理
         * @category Node.js and CommonJS
         */
        'handle-callback-err': 'error',
        /**
         * 禁止直接使用 Buffer
         * @category Node.js and CommonJS
         */
        'no-buffer-constructor': 'error',
        /**
         * 相同类型的 require 必须放在一起
         * @category Node.js and CommonJS
         * @reason 太严格了
         */
        'no-mixed-requires': 'off',
        /**
         * 禁止直接 new require('foo')
         * @category Node.js and CommonJS
         */
        'no-new-require': 'error',
        /**
         * 禁止对 __dirname 或 __filename 使用字符串连接
         * @category Node.js and CommonJS
         */
        'no-path-concat': 'error',
        /**
         * 禁止使用 process.env.NODE_ENV
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-process-env': 'off',
        /**
         * 禁止使用 process.exit(0)
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-process-exit': 'off',
        /**
         * 禁止使用指定的模块
         * @category Node.js and CommonJS
         * @reason 它用于限制某个具体的模块不能使用
         */
        'no-restricted-modules': 'off',
        /**
         * 禁止使用 node 中的同步的方法，比如 fs.readFileSync
         * @category Node.js and CommonJS
         * @reason 使用很常见
         */
        'no-sync': 'off',
        /**
         * 配置数组的中括号内前后的换行格式
         * @category Stylistic Issues
         * @reason 配置项无法配制成想要的样子
         * @fixable
         */
        'array-bracket-newline': 'off',
        /**
         * 数组的括号内的前后禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'array-bracket-spacing': ['error', 'never'],
        /**
         * 配置数组的元素之间的换行格式
         * @category Stylistic Issues
         * @reason 允许一行包含多个元素，方便大数量的数组的书写
         * @fixable
         */
        'array-element-newline': 'off',
        /**
         * 代码块如果在一行内，那么大括号内的首尾必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'block-spacing': ['error', 'always'],
        /**
         * if 与 else 的大括号风格必须一致
         * @category Stylistic Issues
         * @reason else 代码块可能前面需要有一行注释
         * @fixable
         */
        'brace-style': 'off',
        /**
         * 变量名必须是 camelcase 风格的
         * @category Stylistic Issues
         * @reason 很多 api 或文件名都不是 camelcase
         */
        camelcase: 'off',
        /**
         * 注释的首字母必须大写
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'capitalized-comments': 'off',
        /**
         * 对象的最后一个属性末尾必须有逗号
         * @category Stylistic Issues
         * @fixable
         */
        'comma-dangle': 'off',
        /**
         * 逗号前禁止有空格，逗号后必须要有空格
         * @category Stylistic Issues
         * @fixable
         */
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        /**
         * 禁止在行首写逗号
         * @category Stylistic Issues
         * @fixable
         */
        'comma-style': ['error', 'last'],
        /**
         * 用作对象的计算属性时，中括号内的首尾禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'computed-property-spacing': ['error', 'never'],
        /**
         * 限制 this 的别名
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'consistent-this': 'off',
        /**
         * 文件最后一行必须有一个空行
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'eol-last': 'off',
        /**
         * 函数名和执行它的括号之间禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'func-call-spacing': ['error', 'never'],
        /**
         * 函数赋值给变量的时候，函数名必须与变量名一致
         * @category Stylistic Issues
         */
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],
        /**
         * 函数必须有名字
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'func-names': 'off',
        /**
         * 必须只使用函数声明或只使用函数表达式
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'func-style': 'off',
        /**
         * 函数参数要么同在一行要么每行一个
         * @category Stylistic Issues
         * @fixable
         */
        'function-paren-newline': ['error', 'multiline'],
        /**
         * 禁止使用指定的标识符
         * @category Stylistic Issues
         * @reason 它用于限制某个具体的标识符不能使用
         */
        'id-blacklist': 'off',
        /**
         * 限制变量名长度
         * @category Stylistic Issues
         * @reason 没必要限制变量名长度
         */
        'id-length': 'off',
        /**
         * 限制变量名必须匹配指定的正则表达式
         * @category Stylistic Issues
         * @reason 没必要限制变量名
         */
        'id-match': 'off',
        /**
         * 箭头函数的函数体必须与箭头在同一行
         * @category Stylistic Issues
         * @fixable
         */
        'implicit-arrow-linebreak': ['error', 'beside'],
        /**
         * 一个缩进必须用四个空格替代
         * @category Stylistic Issues
         * @fixable
         */
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ],
        /**
         * jsx 中的属性必须用双引号
         * @category Stylistic Issues
         * @fixable
         */
        'jsx-quotes': ['error', 'prefer-double'],
        /**
         * 对象字面量中冒号前面禁止有空格，后面必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict'
            }
        ],
        /**
         * 关键字前后必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        /**
         * 单行注释必须写在上一行
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'line-comment-position': 'off',
        /**
         * 限制换行符为 LF 或 CRLF
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'linebreak-style': 'off',
        /**
         * 注释前后必须有空行
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'lines-around-comment': 'off',
        /**
         * 类的成员之间是否需要空行
         * @category Stylistic Issues
         * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
         * @fixable
         */
        'lines-between-class-members': 'off',
        /**
         * 代码块嵌套的深度禁止超过 5 层
         * @category Stylistic Issues
         */
        'max-depth': ['error', 5],
        /**
         * 限制一行的长度
         * @category Stylistic Issues
         * @reason 现在编辑器已经很智能了，不需要限制一行的长度
         */
        'max-len': 'off',
        /**
         * 限制一个文件最多的行数
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'max-lines': 'off',
        /**
         * 限制函数块中的代码行数
         * @category Stylistic Issues
         */
        'max-lines-per-function': 'off',
        /**
         * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
         * @category Stylistic Issues
         */
        'max-nested-callbacks': ['error', 3],
        /**
         * 函数的参数禁止超过 7 个
         * @category Stylistic Issues
         */
        'max-params': ['error', 7],
        /**
         * 限制函数块中的语句数量
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'max-statements': 'off',
        /**
         * 限制一行中的语句数量
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'max-statements-per-line': 'off',
        /**
         * 约束多行注释的格式
         * @category Stylistic Issues
         * @reason 能写注释已经不容易了，不需要限制太多
         * @fixable
         */
        'multiline-comment-style': 'off',
        /**
         * 三元表达式必须得换行
         * @category Stylistic Issues
         * @reason 三元表达式可以随意使用
         */
        'multiline-ternary': 'off',
        /**
         * new 后面的类名必须首字母大写
         * @category Stylistic Issues
         */
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: true
            }
        ],
        /**
         * new 后面的类必须有小括号
         * @category Stylistic Issues
         * @fixable
         */
        'new-parens': 'error',
        /**
         * 链式调用必须换行
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'newline-per-chained-call': 'off',
        /**
         * 禁止使用 Array 构造函数
         * @category Stylistic Issues
         */
        'no-array-constructor': 'error',
        /**
         * 禁止使用位运算
         * @category Stylistic Issues
         * @reason 位运算很常见
         */
        'no-bitwise': 'off',
        /**
         * 禁止使用 continue
         * @category Stylistic Issues
         * @reason continue 很常用
         */
        'no-continue': 'off',
        /**
         * 禁止在代码后添加内联注释
         * @category Stylistic Issues
         * @reason 内联注释很常用
         */
        'no-inline-comments': 'off',
        /**
         * 禁止 else 中只有一个单独的 if
         * @category Stylistic Issues
         * @reason 单独的 if 可以把逻辑表达的更清楚
         * @fixable
         */
        'no-lonely-if': 'off',
        /**
         * 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
         * @category Stylistic Issues
         * @reason 太严格了，可以由使用者自己去判断如何混用操作符
         */
        'no-mixed-operators': 'off',
        /**
         * 禁止混用空格和缩进
         * @category Stylistic Issues
         */
        'no-mixed-spaces-and-tabs': 'error',
        /**
         * 禁止连续赋值，比如 a = b = c = 5
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'no-multi-assign': 'off',
        /**
         * 禁止出现超过三行的连续空行
         * @category Stylistic Issues
         * @fixable
         */
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        /**
         * 禁止 if 里面有否定的表达式
         * @category Stylistic Issues
         * @reason 否定的表达式可以把逻辑表达的更清楚
         */
        'no-negated-condition': 'off',
        /**
         * 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'no-nested-ternary': 'off',
        /**
         * 禁止直接 new Object
         * @category Stylistic Issues
         */
        'no-new-object': 'error',
        /**
         * 禁止使用 ++ 或 --
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'no-plusplus': 'off',
        /**
         * 禁止使用特定的语法
         * @category Stylistic Issues
         * @reason 它用于限制某个具体的语法不能使用
         */
        'no-restricted-syntax': 'off',
        /**
         * 禁止使用 tabs
         * @category Stylistic Issues
         */
        'no-tabs': 'error',
        /**
         * 禁止使用三元表达式
         * @category Stylistic Issues
         * @reason 三元表达式很常用
         */
        'no-ternary': 'off',
        /**
         * 禁止行尾有空格
         * @category Stylistic Issues
         * @fixable
         */
        'no-trailing-spaces': 'error',
        /**
         * 禁止变量名出现下划线
         * @category Stylistic Issues
         * @reason 下划线在变量名中很常用
         */
        'no-underscore-dangle': 'off',
        /**
         * 必须使用 !a 替代 a ? false : true
         * @category Stylistic Issues
         * @reason 后者表达的更清晰
         * @fixable
         */
        'no-unneeded-ternary': 'off',
        /**
         * 禁止属性前有空格，比如 foo. bar()
         * @category Stylistic Issues
         * @fixable
         */
        'no-whitespace-before-property': 'error',
        /**
         * 禁止 if 后面不加大括号而写两行代码
         * @category Stylistic Issues
         * @fixable
         */
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        /**
         * 大括号内的首尾必须有换行
         * @category Stylistic Issues
         * @fixable
         */
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],
        /**
         * 对象字面量只有一行时，大括号内的首尾必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        /**
         * 对象字面量内的属性每行必须只有一个
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'object-property-newline': 'off',
        /**
         * 禁止变量申明时用逗号一次申明多个
         * @category Stylistic Issues
         */
        'one-var': ['error', 'never'],
        /**
         * 变量申明必须每行一个
         * @category Stylistic Issues
         * @fixable
         */
        'one-var-declaration-per-line': ['error', 'always'],
        /**
         * 必须使用 x = x + y 而不是 x += y
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'operator-assignment': 'off',
        /**
         * 需要换行的时候，操作符必须放在行末
         * @category Stylistic Issues
         * @reason 有时放在第二行开始处更易读
         * @fixable
         */
        'operator-linebreak': 'off',
        /**
         * 代码块首尾必须要空行
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'padded-blocks': 'off',
        /**
         * 限制语句之间的空行规则，比如变量定义完之后必须要空行
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'padding-line-between-statements': 'off',
        /**
         * 使用 ... 而不是 Object.assign
         * @category Stylistic Issues
         * @fixable
         */
        'prefer-object-spread': 'error',
        /**
         * 对象字面量的键名禁止用引号括起来
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'quote-props': 'off',
        /**
         * 必须使用单引号，禁止使用双引号
         * @category Stylistic Issues
         * @fixable
         */
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        /**
         * 结尾必须有分号
         * @category Stylistic Issues
         * @fixable
         */
        semi: [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        /**
         * 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        /**
         * 分号必须写在行尾，禁止在行首出现
         * @category Stylistic Issues
         * @fixable
         */
        'semi-style': ['error', 'last'],
        /**
         * 对象字面量的键名必须排好序
         * @category Stylistic Issues
         * @reason 没必要限制
         */
        'sort-keys': 'off',
        /**
         * 变量申明必须排好序
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'sort-vars': 'off',
        /**
         * if, function 等的大括号之前必须要有空格，比如 if (a) {
         * @category Stylistic Issues
         * @fixable
         */
        'space-before-blocks': ['error', 'always'],
        /**
         * 命名函数表达式括号前禁止有空格，箭头函数表达式括号前面必须有一个空格
         * @category Stylistic Issues
         * @fixable
         */
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'ignore',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        /**
         * 小括号内的首尾禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'space-in-parens': ['error', 'never'],
        /**
         * 操作符左右必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'space-infix-ops': 'error',
        /**
         * new, typeof 等后面必须有空格，++, -- 等禁止有空格
         * @category Stylistic Issues
         * @fixable
         */
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        /**
         * 注释的斜线或 * 后必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ],
        /**
         * case 的冒号前禁止有空格，冒号后必须有空格
         * @category Stylistic Issues
         * @fixable
         */
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        /**
         * 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
         * @category Stylistic Issues
         * @fixable
         */
        'template-tag-spacing': ['error', 'never'],
        /**
         * 文件开头禁止有 BOM
         * @category Stylistic Issues
         * @fixable
         */
        'unicode-bom': ['error', 'never'],
        /**
         * 正则表达式必须有括号包起来
         * @category Stylistic Issues
         * @reason 没必要限制
         * @fixable
         */
        'wrap-regex': 'off',
        /**
         * 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
         * @category ECMAScript 6
         * @reason 箭头函数的返回值，应该允许灵活设置
         * @fixable
         */
        'arrow-body-style': 'off',
        /**
         * 箭头函数只有一个参数的时候，必须加括号
         * @category ECMAScript 6
         * @reason 应该允许灵活设置
         * @fixable
         */
        'arrow-parens': 'off',
        /**
         * 箭头函数的箭头前后必须有空格
         * @category ECMAScript 6
         * @fixable
         */
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        /**
         * constructor 中必须有 super
         * @category ECMAScript 6
         */
        'constructor-super': 'error',
        /**
         * generator 的 * 前面禁止有空格，后面必须有空格
         * @category ECMAScript 6
         * @fixable
         */
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        /**
         * 禁止对定义过的 class 重新赋值
         * @category ECMAScript 6
         */
        'no-class-assign': 'error',
        /**
         * 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
         * @category ECMAScript 6
         * @fixable
         */
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true
            }
        ],
        /**
         * 禁止对使用 const 定义的常量重新赋值
         * @category ECMAScript 6
         */
        'no-const-assign': 'error',
        /**
         * 禁止重复定义类
         * @category ECMAScript 6
         */
        'no-dupe-class-members': 'error',
        /**
         * 禁止重复 import 模块
         * @category ECMAScript 6
         */
        'no-duplicate-imports': 'error',
        /**
         * 禁止使用 new 来生成 Symbol
         * @category ECMAScript 6
         */
        'no-new-symbol': 'error',
        /**
         * 禁止 import 指定的模块
         * @category ECMAScript 6
         * @reason 它用于限制某个具体的模块不能使用
         */
        'no-restricted-imports': 'off',
        /**
         * 禁止在 super 被调用之前使用 this 或 super
         * @category ECMAScript 6
         */
        'no-this-before-super': 'error',
        /**
         * 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
         * @category ECMAScript 6
         * @fixable
         */
        'no-useless-computed-key': 'error',
        /**
         * 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
         * @category ECMAScript 6
         */
        'no-useless-constructor': 'error',
        /**
         * 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         * @category ECMAScript 6
         * @fixable
         */
        'no-useless-rename': 'error',
        /**
         * 禁止使用 var
         * @category ECMAScript 6
         * @fixable
         */
        'no-var': 'error',
        /**
         * 必须使用 a = {b} 而不是 a = {b: b}
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'object-shorthand': 'off',
        /**
         * 必须使用箭头函数作为回调
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'prefer-arrow-callback': 'off',
        /**
         * 申明后不再被修改的变量必须使用 const 来申明
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'prefer-const': 'off',
        /**
         * 必须使用解构
         * @category ECMAScript 6
         * @reason 没必要强制要求
         */
        'prefer-destructuring': 'off',
        /**
         * 必须使用 0b11111011 而不是 parseInt('111110111', 2)
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'prefer-numeric-literals': 'off',
        /**
         * 必须使用 ...args 而不是 arguments
         * @category ECMAScript 6
         * @reason 没必要强制要求
         */
        'prefer-rest-params': 'off',
        /**
         * 必须使用 ... 而不是 apply，比如 foo(...args)
         * @category ECMAScript 6
         * @reason apply 很常用
         * @fixable
         */
        'prefer-spread': 'off',
        /**
         * 必须使用模版字符串而不是字符串连接
         * @category ECMAScript 6
         * @reason 字符串连接很常用
         * @fixable
         */
        'prefer-template': 'off',
        /**
         * generator 函数内必须有 yield
         * @category ECMAScript 6
         */
        'require-yield': 'error',
        /**
         * ... 的后面禁止有空格
         * @category ECMAScript 6
         * @fixable
         */
        'rest-spread-spacing': ['error', 'never'],
        /**
         * import 必须按规则排序
         * @category ECMAScript 6
         * @reason 没必要强制要求
         * @fixable
         */
        'sort-imports': 'off',
        /**
         * 创建 Symbol 时必须传入参数
         * @category ECMAScript 6
         */
        'symbol-description': 'error',
        /**
         * ${name} 内的首尾禁止有空格
         * @category ECMAScript 6
         * @fixable
         */
        'template-curly-spacing': ['error', 'never'],
        /**
         * yield* 后面必须要有空格
         * @category ECMAScript 6
         * @fixable
         */
        'yield-star-spacing': ['error', 'after']
    }
};
