# AlloyTeam ESLint 规则

[![Build Status](https://img.shields.io/travis/AlloyTeam/eslint-config-alloy.svg)](https://travis-ci.org/AlloyTeam/eslint-config-alloy) [![npm package](https://img.shields.io/npm/v/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![Greenkeeper badge](https://badges.greenkeeper.io/AlloyTeam/eslint-config-alloy.svg)](https://greenkeeper.io/)

AlloyTeam ESLint 规则不仅是一套科学的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。

此为 v2 版本，如需 v1 版，请[点击这里](https://github.com/AlloyTeam/eslint-config-alloy/tree/v1)。

## 规则列表

| 名称 | 包含规则 | 解析器 |
| --- | --- | --- |
| [标准规则](#标准规则) | [ESLint 规则][] | [babel-eslint][] |
| [React](#react) | ESLint 规则、[eslint-plugin-react][] | babel-eslint |
| [Vue](#vue) | ESLint 规则、[eslint-plugin-vue][] | [vue-eslint-parser][] |
| [TypeScript](#typescript) | ESLint 规则、[@typescript-eslint][] |[@typescript-eslint/parser][] |
| [TypeScript React](#typescript-react) | ESLint 规则、@typescript-eslint、eslint-plugin-react | @typescript-eslint/parser |
| TypeScript Vue（开发中） | | |

[babel-eslint]: https://github.com/babel/babel-eslint
[vue-eslint-parser]: https://github.com/mysticatea/vue-eslint-parser
[@typescript-eslint/parser]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
[ESLint 规则]: https://eslint.org/docs/rules/
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-vue]: https://eslint.vuejs.org/rules/
[@typescript-eslint]: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules

## 配置原则

我们依据以下三条原则，研读了 ESLint 所有的配置项，定制出了心目中的「完美」ESLint 配置。

1. 能够帮助发现代码错误的规则，全部开启
2. 配置不应该依赖于某个具体项目，而应尽可能的合理
3. 帮助保持团队的代码风格统一，而不是限制开发体验

## 配置解读

ESLint 的配置多达几百条，逐个查阅是一项非常繁重的工作，我们为了简化个性化配置的成本，针对每一条配置都有一句话的注释，以及对应的错误示例和正确示例。这样不仅方便了我们自己查阅某项配置的意义和原因，也使大家更容易配置出自己心目中的规则：

- 每一条配置都有一句话注释说明此配置的用途
- 每个开启的配置都有对应的错误示例和正确示例
- 每个示例都会在真实的 ESLint 脚本中运行，以保证报错项与配置一一匹配
- 对于有争议的配置，都在注释中说明了为什么要这么配置的原因
- 对于能够自动修复的配置，在注释中有标注了 `@fixable`

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
        // // 一个缩进必须用两个空格替代
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
        // // 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ],
        // // jsx 的 children 缩进必须为两个空格
        // 'react/jsx-indent': [
        //     'error',
        //     2
        // ],
        // // jsx 的 props 缩进必须为两个空格
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
npm install --save-dev eslint babel-eslint vue-eslint-parser@5.0.0 eslint-plugin-vue eslint-config-alloy
```

注意：由于[这个原因](https://github.com/mysticatea/vue-eslint-parser/issues/46)，不能使用最新版的 vue-eslint-parser，必须使用 5.0.0 版本。

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
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

注意：由于[这个原因](https://github.com/AlloyTeam/eslint-config-alloy/issues/55)，必须也安装 babel-eslint 才能使用 typescript 规则。

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
        // // 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
        // // 一个缩进必须用两个空格替代
        // '@typescript-eslint/indent': [
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
npm install --save-dev eslint babel-eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'eslint-config-alloy/react',
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
        // // 一个缩进必须用两个空格替代
        // 'indent': [
        //     'error',
        //     2,
        //     {
        //         SwitchCase: 1,
        //         flatTernaryExpressions: true
        //     }
        // ]
        // // 一个缩进必须用两个空格替代
        // '@typescript-eslint/indent': [
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

## Contributing

为了实现高度自动化，此项目的整体架构如下：

- 所有 ESLint 配置均在 `test` 目录下
- 每一项配置存放在对应的目录下，如 `test/react/jsx-key/.eslintrc.js` 描述了规则 `react/jsx-key`
- 如果配置开启了，则需要有对应的示例，包括 `bad.js` 和 `good.js`
- 由于配置和示例在一个目录下，故编辑器中可以直接看到错误信息
- 由 `scripts/build.ts` 脚本将 `test` 目录下分散的配置生成整体的配置
- 运行测试脚本 `test/index.ts` 会检查每个示例是否按照要求报错

### 常用命令

```bash
# 安装依赖
npm i
# 构建 index.js react.js 等 eslintrc 配置
npm run build
# 执行测试
npm test
# 自动修复 ESLint 错误
npm run eslint:fix
# 自动修复格式错误
npm run prettier:fix
# 自动修复 test 目录下的格式错误
npm run eclint:fix
# 发布新版本
npm version <major|minor|patch>
git push --follow-tags
npm publish
```

### TODOs

如果对此项目感兴趣，欢迎从完成 test 下的示例开始入手，参与贡献！

- [ ] 完成所有的 test/index 下的示例
- [ ] 完成所有的 test/react 下的示例
- [x] 完成所有的 test/typescript 下的示例
- [x] 移植 bak/vue 的规则，完成 eslint-config-alloy/vue 的配置
- [x] 实现 TypeScript React 配置
- [ ] 实现 TypeScript Vue 配置
- [x] 更新至新版 eslint 规则
- [x] 更新至新版 react 规则
- [x] 更新至新版 vue 规则
- [x] 更新至新版 typescript 规则
- [x] 添加 Greenkeeper 以保证依赖能够及时更新
- [ ] 完成新版网站建设

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
