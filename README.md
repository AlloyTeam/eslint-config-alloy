# [AlloyTeam ESLint 规则](https://alloyteam.github.io/eslint-config-alloy/)

[![Build Status](https://img.shields.io/travis/AlloyTeam/eslint-config-alloy.svg)](https://travis-ci.org/AlloyTeam/eslint-config-alloy) [![npm package](https://img.shields.io/npm/v/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy)

在线浏览规则描述及示例：https://alloyteam.github.io/eslint-config-alloy/

名称 | 包含规则 | 解析器
--- | --- | ---
[标准规则](#标准规则) | [ESLint 规则][] | [babel-eslint][]
[React](#react) | ESLint 规则、[eslint-plugin-react][] | babel-eslint
[Vue](#vue) | ESLint 规则、[eslint-plugin-vue][] | [vue-eslint-parser@2.0.1-beta.2][] babel-eslint
[TypeScript](#typescript) | ESLint 规则、[eslint-plugin-typescript][] | [typescript-eslint-parser][]
[TypeScript React](#typescript-react) | ESLint 规则、eslint-plugin-typescript、eslint-plugin-react | typescript-eslint-parser

[babel-eslint]: https://github.com/babel/babel-eslint
[vue-eslint-parser@2.0.1-beta.2]: https://github.com/mysticatea/vue-eslint-parser/tree/v2.0.1-beta.2
[typescript-eslint-parser]: https://github.com/eslint/typescript-eslint-parser
[ESLint 规则]: https://eslint.org/docs/rules/
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-vue]: https://github.com/vuejs/eslint-plugin-vue
[eslint-plugin-typescript]: https://github.com/vuejs/eslint-plugin-typescript

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

## 使用方法

### 标准规则

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-config-alloy
```

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

### React

安装：

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-config-alloy
```

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

### Vue

安装：

```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser@2.0.1-beta.2 babel-eslint eslint-plugin-vue@3 eslint-config-alloy
```

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

### TypeScript

安装：

```bash
npm install --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-config-alloy
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy/typescript',
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

### TypeScript React

安装：

```bash
npm install --save-dev eslint typescript typescript-eslint-parser eslint-plugin-typescript eslint-plugin-react eslint-config-alloy
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy/typescript-react',
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
        // ]
    }
};
```

## Troubleshootings

### 在 VSCode 中使用

在 VSCode 中，默认 ESLint 并不能识别 `.vue`、`.ts` 或 `.tsx` 文件，需要在「文件 => 首选项 => 设置」里做如下配置：

```json
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue",
        "typescript",
        "typescriptreact"
    ]
}
```

### VSCode 中的 autoFixOnSave 没有效果

如果需要针对 `.vue`、`.ts` 和 `.tsx` 文件开启 ESLint 的 autoFix，则需要配置成：

```json
{
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        },
        {
            "language": "typescript",
            "autoFix": true
        },
        {
            "language": "typescriptreact",
            "autoFix": true
        }
    ]
}
```

## Testing

```bash
npm test
```

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
