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
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        //
        'for-direction': 'error',
        // getter 必须有返回值，而且不能是 return;
        'getter-return': [
            'error',
            {
                allowImplicit: false
            }
        ],
        'no-await-in-loop': 'off',
        'no-compare-neg-zero': 'error',
        // if, for, while, do...while 里不允许有赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 允许使用 console
        'no-console': 'off',
        // 不允许有类似 for(;;) 这样无法终结的循环，除非循环内部有 break 语句
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        // 任何时候都不允许有空的代码块
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        // 不允许有多余的括号
        // 多余的括号可以使代码更清晰，故不开启这个规则
        'no-extra-parens': 'off',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        // if 里不允许有函数申明，也不允许有 var
        'no-inner-declarations': [
            'error',
            'both'
        ],
        'no-invalid-regexp': 'error',
        // 不允许有特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
        'no-irregular-whitespace': [
            'error',
            {
                
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],
        'no-obj-calls': 'error',
        // 很多地方会用到 isOwnProperty，故这个检查不开启
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        // 长期的规划中，可能会使用 TypeScript，就不需要 jsdoc 而且这个检查的要求太严格了
        'valid-jsdoc': 'off',
        'valid-typeof': 'error',

        //
        //
        // 最佳实践
        // 这些规则通过一些最佳实践帮助你避免问题
        //
        // 有 setter 的地方必须有 getter，而有 getter 的地方可以没有 setter
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        // 允许在 Array.prototype.map 内 return undefined
        'array-callback-return': 'off',
        'block-scoped-var': 'error',
        // 这条规则的含义是：Class 里面凡是没有用到 this 的方法都应该申明为静态方法，这个规则太严格了，故不开启
        'class-methods-use-this': 'off',
        // 最佳实践中，一个函数的复杂度最好只有 4-6，所以我们的终极目标是 5，当然可以慢慢改进
        'complexity': [
            'error',
            {
                max: 5
            }
        ],
        // 允许一个代码块中在不同分支 return 不同的类型
        'consistent-return': 'off',
        // if, while 后面必须要有 {
        'curly': [
            'error',
            'multi-line',
            'consistent'
        ],
        // switch case 可以没有 default
        'default-case': 'off',
        // 链式调用的时候，dot 放在第二行开头处，而不是第一行结尾处
        'dot-location': [
            'error',
            'property'
        ],
        // 允许 foo["bar"]，不强制要求写成 foo.bar。原因是要写一系列属性的时候，可以更统一
        'dot-notation': 'off',
        // 任何时候都必须用 === 或 !== 而不是 == 或 !=
        'eqeqeq': [
            'error',
            'always'
        ],
        'guard-for-in': 'error',
        // 允许使用 alert
        'no-alert': 'off',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        // 正则表达式中不需要转义 =
        'no-div-regex': 'off',
        // 允许 else 里面有 return
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
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        // 不允许使用 !! ~ 等难以理解的运算符
        // 为了性能考虑，不开启此规则
        'no-implicit-coercion': 'off',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        // this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
        // 故关闭此规则
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
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
        // 不允许有连续多个空格，除非是注释前，或对其对象的属性，或对其变量定义，或对其 import
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
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-restricted-properties': 'error',
        // 用于限制某个具体的 api 不能使用，一般是废弃 api 的时候再用
        'no-restricted-properties': 'off',
        // 不要在 return 语句里面赋值
        'no-return-assign': [
            'error',
            'always'
        ],
        'no-return-await': 'error',
        // javascript:void(0) 应该被允许
        'no-script-url': 'off',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        // 禁止无用的表达式，除非它是 a && b() 或 a ? b() : c() 或 tag`some tagged template string`
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-concat': 'error',
        // 没必要的转义，允许使用没必要的转义，关闭此规则
        'no-useless-escape': 'off',
        // 没必要限制 return
        'no-useless-return': 'off',
        'no-void': 'error',
        // 允许注释中出现 TODO 和 FIXME
        'no-warning-comments': 'off',
        'no-with': 'error',
        'prefer-promise-reject-errors': 'error',
        'radix': 'error',
        'require-await': 'error',
        // var 没必要全部定义在最前面
        'vars-on-top': 'off',
        // iife 的格式
        'wrap-iife': [
            'error',
            'inside',
            {
                functionPrototypeMethods: true
            }
        ],
        // 使用 if (foo === 5) 而不是 if (5 === foo)
        'yoda': [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ],

        //
        //
        // 严格模式
        // 这些规则与严格模式指令有关
        //
        // strict mode 已经不再需要了
        'strict': [
            'error',
            'never'
        ],

        //
        //
        // 变量
        // 这些规则与变量申明有关
        //
        // 变量在定义的时候需不需要被赋值，这个不需要有强制性的要求
        'init-declarations': 'off',
        // catch 的参数名可以与前面定义的变量重复
        'no-catch-shadow': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        // 用于限制某个具体的变量名不能使用，目前不需要
        'no-restricted-globals': 'off',
        // 不同作用域下不允许重复定义同名变量
        'no-shadow': [
            'error',
            {
                builtinGlobals: false,
                hoist: 'functions',
                allow: [
                ]
            }
        ],
        'no-shadow-restricted-names': 'error',
        // 不允许使用未定义的变量
        'no-undef': [
            'error',
            {
                typeof: false
            }
        ],
        'no-undef-init': 'error',
        'no-undefined': 'error',
        // 定义了的变量必须使用，函数参数可以忽略，catch 的参数可以忽略
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                caughtErrors: 'none'
            }
        ],
        // 先定义后使用，除非是函数申明
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
        // Node.js 和 CommonJS
        // 这些规则与在 Node.js 中运行的代码或浏览器中使用的 CommonJS 有关
        //
        // Limitations 太多了，故关闭这个检查
        'callback-return': 'off',
        // 由于有的时候还是需要条件加载，所以暂时这个规则没有必要开启
        'global-require': 'off',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        // 这条规则的含义是：相同类型的 require 必须 group 在一起，这太严格了
        'no-mixed-requires': 'off',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        // 允许使用 process.env.NODE_ENV
        'no-process-env': 'off',
        // 允许使用 process.exit(0)
        'no-process-exit': 'off',
        // 用于自定义限制一些 modules 的使用，现在不需要
        'no-restricted-modules': 'off',
        // 允许使用 node 中的同步的方法，如 fs.readFileSync
        'no-sync': 'off',

        //
        //
        // 风格问题
        // 这些规则与代码风格有关，所以是非常主观的
        //
        // 如果数组内有换行，那么数组的括号内的首和尾需要空行
        // 配置项无法配制成想要的样子
        'array-bracket-newline': 'off',
        // 数组的括号内的前后都不要空格
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        // 数组内可以一行包含多个元素，方便大数量的数组的书写
        'array-element-newline': 'off',
        // 代码块如果在一行内，那么大括号内的首尾需要有空格
        'block-spacing': [
            'error',
            'always'
        ],
        // else 需要与 if 的结尾 } 在同一行，不开启此规则，因为 else 代码块可能前面需要有一行注释
        'brace-style': 'off',
        // 很多 api 或文件名都不是 camelcase，故这里不开启此规则
        'camelcase': 'off',
        // 没必要要求注释的首字母必须大写
        'capitalized-comments': 'off',
        // 没必要要求对象的最后一个属性末尾也有逗号
        'comma-dangle': 'off',
        // 逗号前不要空格，后要空格
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        // 不要再行首写逗号
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
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '&&': 'ignore',
                    '||': 'ignore',
                    '?': 'ignore',
                    ':': 'ignore'
                }
            }
        ],
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
        // ECMAScript 6
        // 这些规则与 ES6（即通常所说的 ES2015）有关
        //
        // 箭头函数的返回值，应该允许灵活设置：既可以 () => 0，也可以 () => { return 0; }
        'arrow-body-style': 'off',
        // 箭头函数只有一个参数的时候括号可加可不加
        'arrow-parens': 'off',
        // 箭头函数前后必须有空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        'constructor-super': 'error',
        // generator 的 * 前不能有空格，后面需要有空格
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        // 当需要限制制定包的引入的时候再开启
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        // 使用 a = {b} 而不是 a = {b: b}
        // 不强制要求
        'object-shorthand': "off",
        // 不强制使用箭头函数
        'prefer-arrow-callback': 'off',
        // 不强制使用 const
        'prefer-const': 'off',
        // 不强制使用解构
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        // 使用 ...args 替代 arguments，没必要开启
        'prefer-rest-params': 'off',
        // 使用 ... 替代 apply。没必要开启，apply 的应用还是很广泛的
        'prefer-spread': 'off',
        'prefer-template': 'off',
        'require-yield': 'error',
        // ... 的后面不要空格
        'rest-spread-spacing': [
            'error',
            'never'
        ],
        // 没必要排序 imports
        'sort-imports': 'off',
        'symbol-description': 'error',
        // ${name} 内的首尾不要有空格
        'template-curly-spacing': [
            'error',
            'never'
        ],
        // yield* 后面要空格
        'yield-star-spacing': [
            'error',
            'after'
        ]
    }
};
