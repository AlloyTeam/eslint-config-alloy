# AlloyTeam ESLint 规则

[![Build Status](https://img.shields.io/travis/AlloyTeam/eslint-config-alloy.svg)](https://travis-ci.org/AlloyTeam/eslint-config-alloy) [![npm package](https://img.shields.io/npm/v/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy)

- [配置原则](#配置原则)
- [配置解读](#配置解读)
- [使用方法](#使用方法)
  - [标准规则](#标准规则)
  - [React 版](#react-版)
  - [Vue 版](#vue-版)

---

本规则包含以下几种配置项：

- [标准规则](https://github.com/AlloyTeam/eslint-config-alloy/tree/master/index.js)：包含[所有 ESLint 规则](https://eslint.org/docs/rules/)
- [React 版](https://github.com/AlloyTeam/eslint-config-alloy/tree/master/react.js)：在标准规则的基础上，增加了所有 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) 规则
- [Vue 版](https://github.com/AlloyTeam/eslint-config-alloy/tree/master/vue.js)：在标准规则的基础上，增加了所有 [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) 规则

## 配置原则

我们依据以下三条原则，研读了 ESLint 所有的配置项，定制出了心目中的「完美」ESLint 配置。

1. 能够帮助发现代码错误的规则，全部开启
2. 配置不应该依赖于某个具体项目，而应尽可能的合理
3. 帮助保持团队的代码风格统一，而不是限制开发体验

## 配置解读

我们对每一条配置，都有详尽的注释，这样不仅方便了我们自己查阅某项配置的意义和原因，也使大家更容易配置出自己心目中的规则：

- 每一条配置都有注释说明此配置的用途
- 对于理解困难的配置，都在注释中有举例
- 对于有争议的配置，都在注释中说明了为什么要这么配置的原因
- 对于关闭掉的配置，都在注释中有对应的原因说明，以及 `@off` 的标识
- 对于能够 autofix 的配置，都在注释中有标注 `@autofix`

详细的配置内容在这里：

- [ESLint 标准规则](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/index.js)
- [eslint-plugin-react 规则](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/react.js)
- [eslint-plugin-vue 规则](https://github.com/AlloyTeam/eslint-config-alloy/blob/master/vue.js)

下面列出一个代码片段供参考：

```js
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
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
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
        // @off 要求太严格了，有时需要在循环中写 await
        'no-await-in-loop': 'off',
        // 禁止与负零进行比较
        'no-compare-neg-zero': 'error',
        // 禁止在 if, for, while 里使用赋值语句，除非这个赋值语句被括号包起来了
        'no-cond-assign': [
            'error',
            'except-parens'
        ],
        // 禁止使用 console
        // @off console 的使用很常见
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
        // @fixable 禁止使用 debugger
        'no-debugger': 'error',
        // 禁止在函数参数中出现重复名称的参数
        'no-dupe-args': 'error',
        // 禁止在对象字面量中出现重复名称的键名
        'no-dupe-keys': 'error',
    }
};
```

## 使用方法

### 标准规则

#### 安装

```bash
npm install --save-dev eslint-config-alloy babel-eslint
```

#### 配置 .eslintrc.js

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // jQuery: false,
        // $: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```

### React 版

#### 安装

```bash
npm install --save-dev eslint-config-alloy eslint-plugin-react babel-eslint
```

#### 配置 .eslintrc.js

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy/react',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // React: false,
        // ReactDOM: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ],
        // // @fixable jsx 的 children 缩进必须为两个空格
        // 'react/jsx-indent': [
        //     'error',
        //     2
        // ],
        // // @fixable jsx 的 props 缩进必须为两个空格
        // 'react/jsx-indent-props': [
        //     'error',
        //     2
        // ]
    }
};
```

### Vue 版

#### 安装

```bash
npm install --save-dev eslint-config-alloy eslint-plugin-vue babel-eslint
```

#### 配置 .eslintrc.js

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy/vue',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // Vue: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
    }
};
```

## Testing

```bash
npm test
```

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
