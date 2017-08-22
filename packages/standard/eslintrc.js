/**
 * 本规则基于 ESLint 4.2.0
 */

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            jsx: true
        }
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    root: true,
    rules: {
        //
        //
        //
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        //
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
        'for-direction': 'error',
        // getter 必须有返回值，并且禁止返回空，比如 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // 关闭此规则，因为要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 'off',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 禁止使用 console
        // 关闭此规则，因为 console 的使用很常见
        'no-console': 'off',
        // 禁止将常量作为 if, for, while 里的测试条件，比如 if (true), for (;;)，除非循环内部有 break 语句
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
        // 开启此规则，因为字符串中一般不会出现 Ctrl 键，所以一旦出现了，可能是一个代码错误
        'no-control-regex': 'error',
        // 禁止使用 debugger @fix
        'no-debugger': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
        // 禁止在 switch 语句中出现重复测试表达式的 case
        'no-duplicate-case': 'error',
        // 禁止出现空代码块
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        // 禁止在正则表达式中使用空的字符集 []
        'no-empty-character-class': 'error',
        // 禁止将 catch 的第一个参数 error 重新赋值
        'no-ex-assign': 'error',
        // 禁止在测试表达式中使用 Boolean
        'no-extra-boolean-cast': 'error',
        // 禁止出现多余的括号，比如 (a * b) + c
        // 关闭此规则，因为多余的括号可以使代码更清晰
        'no-extra-parens': 'off',
        // 禁止出现多于的分号
        'no-extra-semi': 'error',
        // 禁止将一个函数申明重新赋值，如：
        // function foo() {}
        // foo = bar
        'no-func-assign': 'error',
        // 禁止在 if 内出现函数申明或使用 var 定义变量
        'no-inner-declarations': [
            'error',
            'both'
        ],
        // 禁止出现非法的正则表达式
        'no-invalid-regexp': 'error',
        // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
        'no-irregular-whitespace': [
            'error',
            {
                
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],
        // 禁止将 Math, JSON 或 Reflect 直接作为函数调用，必须作为类使用
        'no-obj-calls': 'error',
        // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
        // 关闭此规则，因为很多地方会用到 hasOwnProperty
        'no-prototype-builtins': 'off',
        // 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
        'no-regex-spaces': 'error',
        // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-sparse-arrays': 'error',
        // 禁止在普通字符串中出现模版字符串的变量形式，如 'Hello ${name}!'
        'no-template-curly-in-string': 'error',
        // 禁止出现难以理解的多行表达式，如：
        // let x = function () {}
        // `hello`
        'no-unexpected-multiline': 'error',
        // 禁止在 return, throw, break 或 continue 之后还有代码
        'no-unreachable': 'error',
        // 禁止在 finally 中出现 return, throw, break 或 continue
        'no-unsafe-finally': 'error',
        // 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
        'no-unsafe-negation': 'error',
        // 必须使用 isNaN(foo) 而不是 foo === NaN
        'use-isnan': 'error',
        // 注释必须符合 jsdoc 的规范
        // 关闭此规则，因为 jsdoc 要求太严格
        'valid-jsdoc': 'off',
        // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
        'valid-typeof': 'error',

        //
        //
        //
        // 最佳实践
        // 这些规则通过一些最佳实践帮助你避免问题
        //
        // 有 setter 的地方必须有 getter，有 getter 的地方可以没有 setter
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        // 数组的一些方法（map, reduce 等）的回调函数中，必须有返回值
        // 关闭此规则，因为太严格了
        'array-callback-return': 'off',
        // 将 var 定义的变量视为块作用域，禁止在块外使用
        'block-scoped-var': 'error',
        // 在类的非静态方法中，必须存在对 this 的引用
        // 关闭此规则，因为太严格了
        'class-methods-use-this': 'off',
        // 禁止函数的循环复杂度超过 10，https://en.wikipedia.org/wiki/Cyclomatic_complexity
        'complexity': [
            'error',
            {
                max: 10
            }
        ],
        // 禁止函数在不同分支返回不同类型的值
        // 关闭此规则，因为太严格了
        'consistent-return': 'off',
        // if 后面必须要有 {，除非是单行 if
        'curly': [
            'error',
            'multi-line',
            'consistent'
        ],
        // switch 语句必须有 default
        // 关闭此规则，因为太严格了
        'default-case': 'off',
        // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'dot-location': [
            'error',
            'property'
        ],
        // 禁止出现 foo['bar']，必须写成 foo.bar
        // 关闭此规则，因为当需要写一系列属性的时候，可以更统一
        'dot-notation': 'off',
        // 必须使用 === 或 !==，禁止使用 == 或 !=
        'eqeqeq': [
            'error',
            'always'
        ],
        // for in 内部必须有 hasOwnProperty
        'guard-for-in': 'error',
        // 禁止使用 alert
        // 关闭此规则，因为 alert 很常用
        'no-alert': 'off',
        // 禁止使用 caller 或 callee
        'no-caller': 'error',
        // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
        'no-case-declarations': 'error',
        // 禁止在正则表达式中出现没必要的转义符
        // 关闭此规则，因为多于的转义符没有害处，反而还可以使代码更易懂
        'no-div-regex': 'off',
        // 禁止在 else 内使用 return，必须改为提前结束
        // 关闭此规则，因为 else 中使用 return 可以使代码结构更清晰
        'no-else-return': 'off',
        // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-empty-function': [
            'error',
            {
                allow: [
                    'functions',
                    'arrowFunctions'
                ]
            }
        ],
        // 禁止解构中出现空 {} 或 []
        'no-empty-pattern': 'error',
        // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
        'no-eq-null': 'error',
        // 禁止使用 eval
        'no-eval': 'error',
        // 禁止修改原生对象
        'no-extend-native': 'error',
        // 禁止出现没必要的 bind
        'no-extra-bind': 'error',
        // 禁止出现没必要的 label
        'no-extra-label': 'error',
        // switch 的 case 内必须有 break, return 或 throw
        'no-fallthrough': 'error',
        // 表示小数时，禁止省略 0，比如 .5
        'no-floating-decimal': 'error',
        // 禁止对全局变量赋值
        'no-global-assign': 'error',
        // 禁止使用 !! ~ 等难以理解的运算符
        // 关闭此规则，因为它们的性能更好
        'no-implicit-coercion': 'off',
        // 禁止在全局作用域下定义变量或申明函数
        'no-implicit-globals': 'error',
        // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
        'no-implied-eval': 'error',
        // 禁止在类之外的地方使用 this
        // 关闭此规则，因为 this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
        'no-invalid-this': 'off',
        // 禁止使用 __iterator__
        'no-iterator': 'error',
        // 禁止使用 label
        'no-labels': 'error',
        // 禁止使用没必要的 {} 作为代码块
        'no-lone-blocks': 'error',
        // 禁止在循环内的函数中出现循环体条件语句中定义的变量，比如：
        // for (var i = 0; i < 10; i++) {
        //     (function () { return i })();
        // }
        'no-loop-func': 'error',
        // 禁止使用除下面列出的
        // 除了下面列出的数字外，不允许使用其他的 magic number
        'no-magic-numbers': [
            'error',
            {
                ignore: [
                    -1,
                    0,
                    1,
                    2,
                    100
                ],
                ignoreArrayIndexes: true,
                enforceConst: true,
                detectObjects: false
            }
        ],
        // 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
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
        // 禁止使用 \ 来换行字符串
        'no-multi-str': 'error',
        // 禁止直接 new 一个类而不赋值
        'no-new': 'error',
        // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
        'no-new-func': 'error',
        // 禁止使用 new 来生成 String, Number 或 Boolean
        'no-new-wrappers': 'error',
        // 禁止使用 0 开头的数字表示八进制数
        'no-octal': 'error',
        // 禁止使用八进制的转义符
        'no-octal-escape': 'error',
        // 禁止对函数的参数重新赋值
        'no-param-reassign': 'error',
        // 禁止使用 __proto__
        'no-proto': 'error',
        // 禁止重复定义变量
        'no-redeclare': 'error',
        // 禁止使用指定的对象属性
        // 关闭此规则，因为它用于限制某个具体的 api 不能使用
        'no-restricted-properties': 'off',
        // 禁止在 return 语句里赋值
        'no-return-assign': [
            'error',
            'always'
        ],
        // 禁止在 return 语句里使用 await
        'no-return-await': 'error',
        // 禁止出现 location.href = 'javascript:void(0)';
        // 关闭此规则，因为 javascript:void(0) 应该允许使用
        'no-script-url': 'off',
        // 禁止将自己赋值给自己
        'no-self-assign': 'error',
        // 禁止将自己与自己比较
        'no-self-compare': 'error',
        // 禁止使用逗号操作符
        'no-sequences': 'error',
        // 禁止 throw 字面量，必须 throw 一个 Error 对象
        'no-throw-literal': 'error',
        // 循环内必须对循环条件的变量有修改
        'no-unmodified-loop-condition': 'error',
        // 禁止无用的表达式
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        // 禁止出现没用的 label
        'no-unused-labels': 'error',
        // 禁止出现没必要的 call 或 apply
        'no-useless-call': 'error',
        // 禁止出现没必要的字符串连接
        'no-useless-concat': 'error',
        // 禁止出现没必要的转义
        // 关闭此规则，因为转义可以使代码更易懂
        'no-useless-escape': 'off',
        // 禁止没必要的 return
        // 关闭此规则，因为没必要限制 return
        'no-useless-return': 'off',
        // 禁止使用 void
        'no-void': 'error',
        // 禁止注释中出现 TODO 和 FIXME
        // 关闭此规则，因为 TODO 很常用
        'no-warning-comments': 'off',
        // 禁止使用 with
        'no-with': 'error',
        // Promise 的 reject 中必须传入 Error 对象，而不是字面量
        'prefer-promise-reject-errors': 'error',
        // parseInt 必须传入第二个参数
        'radix': 'error',
        // async 函数中必须存在 await 语句
        'require-await': 'error',
        // var 必须在作用域的最前面
        // 关闭此规则，因为 var 不在最前面也是很常见的用法
        'vars-on-top': 'off',
        // 立即执行的函数必须符合如下格式 (function () { alert('Hello') })()
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true
            }
        ],
        // 必须使用 if (foo === 5) 而不是 if (5 === foo)
        'yoda': [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ],

        //
        //
        //
        // 严格模式
        // 这些规则与严格模式指令有关
        //
        // 禁止使用 'strict';
        'strict': [
            'error',
            'never'
        ],

        //
        //
        //
        // 变量
        // 这些规则与变量申明有关
        //
        // 变量必须在定义的时候赋值
        // 关闭此规则，因为先定义后赋值很常见
        'init-declarations': 'off',
        // 禁止 catch 的参数名与定义过的变量重复
        // 关闭此规则，因为太严格了
        'no-catch-shadow': 'off',
        // 禁止使用 delete
        'no-delete-var': 'error',
        // 禁止 label 名称与定义过的变量重复
        'no-label-var': 'error',
        // 禁止使用指定的全局变量
        // 关闭此规则，因为它用于限制某个具体的变量名不能使用
        'no-restricted-globals': 'off',
        // 禁止变量名与上层作用域内的定义过的变量重复
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: [
                    'resolve',
                    'reject',
                    'done',
                    'cb',
                    'callback',
                    'error',
                    'err',
                    'e'
                ]
            }
        ],
        // 禁止使用保留字作为变量名
        'no-shadow-restricted-names': 'error',
        // 禁止使用未定义的变量
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        // 禁止将 undefined 赋值给变量
        'no-undef-init': 'error',
        // 禁止对 undefined 重新赋值
        'no-undefined': 'error',
        // 定义过的变量必须使用
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none'
            }
        ],
        // 变量必须先定义后使用
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: false
            }
        ],

        //
        //
        //
        // Node.js 和 CommonJS
        // 这些规则与在 Node.js 中运行的代码或浏览器中使用的 CommonJS 有关
        //
        // callback 之后必须立即 return
        // 关闭此规则，因为 Limitations 太多了
        'callback-return': 'off',
        // require 必须在全局作用域下
        // 关闭此规则，因为条件加载很常见
        'global-require': 'off',
        // callback 中的 error 必须被处理
        'handle-callback-err': 'error',
        // 禁止直接使用 Buffer
        'no-buffer-constructor': 'error',
        // 相同类型的 require 必须放在一起
        // 关闭此规则，因为太严格了
        'no-mixed-requires': 'off',
        // 禁止直接 new require('foo')
        'no-new-require': 'error',
        // 禁止对 __dirname 或 __filename 使用字符串连接
        'no-path-concat': 'error',
        // 禁止使用 process.env.NODE_ENV
        // 关闭此规则，因为使用很常见
        'no-process-env': 'off',
        // 禁止使用 process.exit(0)
        // 关闭此规则，因为使用很常见
        'no-process-exit': 'off',
        // 禁止使用指定的模块
        // 关闭此规则，因为它用于限制某个具体的模块不能使用
        'no-restricted-modules': 'off',
        // 禁止使用 node 中的同步的方法，比如 fs.readFileSync
        // 关闭此规则，因为使用很常见
        'no-sync': 'off',

        //
        //
        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // 配置数组的中括号内前后的换行格式
        // 关闭此规则，因为配置项无法配制成想要的样子
        'array-bracket-newline': 'off',
        // 数组的括号内的前后禁止有空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // 配置数组的元素之间的换行格式
        // 关闭此规则，允许一行包含多个元素，方便大数量的数组的书写
        'array-element-newline': 'off',
        // 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
        'block-spacing': [
            'error',
            'always'
        ],
        // if 与 else 的大括号风格必须一致
        // 关闭此规则，因为 else 代码块可能前面需要有一行注释
        'brace-style': 'off',
        // 变量名必须是 camelcase 风格的
        // 关闭此规则，因为很多 api 或文件名都不是 camelcase
        'camelcase': 'off',
        // 注释的首字母必须大写
        // 关闭此规则，因为没必要限制
        'capitalized-comments': 'off',
        // 对象的最后一个属性末尾必须有逗号
        // 关闭此规则，因为没必要限制
        'comma-dangle': 'off',
        // 逗号前禁止有空格，逗号后必须要有空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // 禁止在行首写逗号
        'comma-style': [
            'error',
            'last'
        ],
        // 用作对象属性时，中括号内的首尾不要有空格
        'computed-property-spacing': [
            'error',
            'never'
        ],
        // 这个配置用于限制 this 的别名，若需要限制，请在项目中单独配置
        'consistent-this': 'off',
        // 没必要要求最后一行必须有一个空行
        'eol-last': 'off',
        // 函数名和执行它的括号之间不要有空格
        'func-call-spacing': [
            'error',
            'never'
        ],
        // 函数赋值给变量的时候，函数名需要和变量名一致
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],
        // 没必要要求函数必须加名字
        'func-names': 'off',
        // 函数申明和函数表达式都可以用，没必要限制
        'func-style': 'off',
        // 变量名限制请在项目中单独配置
        'id-blacklist': 'off',
        // 没必要限制变量名长度
        'id-length': 'off',
        // 没必要限制变量名
        'id-length': 'off',
        // 1 tab === 4 spaces
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1,
                MemberExpression: 1,
                FunctionDeclaration: {
                    body: 1,
                    parameters: 1
                },
                CallExpression: {
                    arguments: 1
                },
                ArrayExpression: 1,
                ObjectExpression: 1,
                flatTernaryExpressions: true
            }
        ],
        // jsx 中的属性用双引号
        'jsx-quotes': [
            'error',
            'prefer-double'
        ],
        // object 中冒号前面不要空格，后面要空格
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true,
                mode: 'strict',
            }
        ],
        // if, function 等 keyword 前后都要有空格
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 注释可以写在上一行或这一行末尾
        'line-comment-position': 'off',
        // LF 或 CRLF 都行
        'linebreak-style': 'off',
        // 注释前后是否有空行无所谓
        'lines-around-comment': 'off',
        // if 的深度不允许超过 5
        'max-depth': [
            'error',
            5
        ],
        // 现在编辑器已经很智能了，不需要限制一行的长度
        'max-len': 'off',
        // 一个文件最多的行数
        // 没必要限制，关闭此规则
        'max-lines': 'off',
        // callback 嵌套最多 3 层，多了请用 async await 替代
        'max-nested-callbacks': [
            'error',
            3
        ],
        // 人能记住的参数最多是 7 个
        'max-params': [
            'error',
            7
        ],
        // 已限制了 function 的最大长度，这个实在没有必要了
        'max-statements': 'off',
        // 没有必要限制
        'max-statements-per-line': 'off',
        // 三元表达式应该可以随意使用
        'multiline-ternary': 'off',
        // new 后面的类名应该是大写开头的，大写开头的允许不用 new
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: true
            }
        ],
        'new-parens': 'error',
        // 链式调用没必要强制换行
        'newline-per-chained-call': 'off',
        'no-array-constructor': 'error',
        // 位运算允许使用
        'no-bitwise': 'off',
        // continue 是基本语法，允许使用
        'no-continue': 'off',
        // 允许 inline 注释
        'no-inline-comments': 'off',
        // 单独的 if 有时可以把逻辑表达的更清楚
        'no-lonely-if': 'off',
        // 使用者自己去判断如何 mix 操作符
        'no-mixed-operators': 'off',
        'no-mixed-spaces-and-tabs': 'error',
        // a = b = c = 5 这种用法很常见
        'no-multi-assign': 'off',
        // 不能有超过三行的连续空行
        'no-multiple-empty-lines': [
            'error',
            {
                max: 3,
                maxEOF: 1,
                maxBOF: 1
            }
        ],
        // if 里面允许有 !==
        'no-negated-condition': 'off',
        // a ? b : c ? d : e 这种写法可以允许
        'no-nested-ternary': 'off',
        'no-new-object': 'error',
        // a++ 允许
        'no-plusplus': 'off',
        // 与其他配置重合，比如 no-with
        'no-restricted-syntax': 'off',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        // 变量名允许有 _
        'no-underscore-dangle': 'off',
        // 使用 !a 替代 a ? false : true，不开启此规则，因为后者表达的更清晰
        'no-unneeded-ternary': 'off',
        'no-whitespace-before-property': 'error',
        // 不允许 if 后面不加大括号而写两行代码
        'nonblock-statement-body-position': [
            'error',
            'beside',
            {
                overrides: {
                    while: 'below'
                }
            }
        ],
        // obj 中每行一项
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true
            }
        ],
        // obj 占用一行，则大括号内的首尾不需要空格
        'object-curly-spacing': [
            'error',
            'always',
            {
                arraysInObjects: true,
                objectsInObjects: false
            }
        ],
        // 允许 obj 写在一行
        'object-property-newline': 'off',
        // 必须每行一个 var
        'one-var': [
            'error',
            'never'
        ],
        // 必须每行一个 var
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        // 随便使用 x += y 或 x = x + y
        'operator-assignment': 'off',
        // 需要换行的时候，+ 放在行末
        // 不开启
        'operator-linebreak': 'off',
        // 代码块首尾不要空行，不开启此规则
        'padded-blocks': 'off',
        // 对什么地方需要空行不做限制
        'padding-line-between-statements': 'off',
        // 对象的 key 什么时候需要加引号不做限制
        'quote-props': 'off',
        // 只允许使用单引号
        'quotes': [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        // 对 jsdoc 格式注释不作要求
        'require-jsdoc': 'off',
        // 结尾必须有 ;
        'semi': [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        // ; 前不允许有空格，; 后必须有空格
        'semi-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // ; 只能在行尾，不能在行首
        'semi-style': [
            'error',
            'last'
        ],
        // 没必要必须排序 keys
        'sort-keys': 'off',
        // 没必要排序 vars
        'sort-vars': 'off',
        // 代码块前要有空格
        'space-before-blocks': [
            'error',
            'always'
        ],
        // function 前是否必须要空格
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        // () 内的首尾不要有空格
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-infix-ops': 'error',
        // 一元操作符必须有空格
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        // 注释前后得有空格
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: [
                        '*'
                    ],
                    balanced: true
                }
            }
        ],
        // case 的冒号前不能有空格，冒号后必须有空格
        'switch-colon-spacing': [
            'error',
            {
                after: true,
                before: false
            }
        ],
        // tag`Hello World` 不能有空格
        'template-tag-spacing': [
            'error',
            'never'
        ],
        // 文件开头不允许有 BOM
        'unicode-bom': [
            'error',
            'never'
        ],
        // RegExp 不需要括号包起来
        'wrap-regex': 'off',

        //
        //
        //
        // ECMAScript 6
        // 这些规则与 ES6（即通常所说的 ES2015）有关
        //
        // 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
        // 关闭此规则，因为箭头函数的返回值，应该允许灵活设置
        'arrow-body-style': 'off',
        // 箭头函数只有一个参数的时候，必须加括号
        // 关闭此规则，因为应该允许灵活设置
        'arrow-parens': 'off',
        // 箭头函数的箭头前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // constructor 中必须有 super
        'constructor-super': 'error',
        // generator 的 * 前面禁止有空格，后面必须有空格
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        // 禁止对定义过的 class 重新赋值
        'no-class-assign': 'error',
        // 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
        'no-confusing-arrow': 'error',
        // 禁止对使用 const 定义的常量重新赋值
        'no-const-assign': 'error',
        // 禁止重复定义类
        'no-dupe-class-members': 'error',
        // 禁止重复 import 模块
        'no-duplicate-imports': 'error',
        // 禁止使用 new 来生成 Symbol 
        'no-new-symbol': 'error',
        // 禁止 import 指定的模块
        // 关闭此规则，因为它用于限制某个具体的模块不能使用
        'no-restricted-imports': 'off',
        // 禁止在 super 被调用之前使用 this 或 super
        'no-this-before-super': 'error',
        // 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
        'no-useless-computed-key': 'error',
        // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
        'no-useless-constructor': 'error',
        // 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
        'no-useless-rename': 'error',
        // 禁止出现 var
        'no-var': 'error',
        // 必须使用 a = {b} 而不是 a = {b: b}
        // 关闭此规则，因为没必要强制要求
        'object-shorthand': "off",
        // 必须使用箭头函数作为回调
        // 关闭此规则，因为没必要强制要求
        'prefer-arrow-callback': 'off',
        // 申明后不再被修改的变量必须使用 const 来申明
        // 关闭此规则，因为没必要强制要求
        'prefer-const': 'off',
        // 必须使用解构
        // 关闭此规则，因为没必要强制要求
        'prefer-destructuring': 'off',
        // 必须使用 0b11111011 而不是 parseInt('111110111', 2)
        // 关闭此规则，因为没必要强制要求
        'prefer-numeric-literals': 'off',
        // 必须使用 ...args 而不是 arguments
        // 关闭此规则，因为没必要强制要求
        'prefer-rest-params': 'off',
        // 必须使用 ... 而不是 apply，比如 foo(...args)
        // 关闭此规则，因为 apply 很常用
        'prefer-spread': 'off',
        // 必须使用模版字面量而不是字符串连接
        // 关闭此规则，因为字符串连接很常用
        'prefer-template': 'off',
        // generator 函数内必须有 yield
        'require-yield': 'error',
        // ... 的后面禁止有空格
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        // import 必须按规则排序
        // 关闭此规则，因为没必要强制要求
        'sort-imports': 'off',
        // 创建 Symbol 时必须传入参数
        'symbol-description': 'error',
        // ${name} 内的首尾禁止有空格
        'template-curly-spacing': [
            'error',
            'never'
        ],
        // yield* 后面必须要有空格
        'yield-star-spacing': [
            'error',
            'after'
        ]
    }
};
