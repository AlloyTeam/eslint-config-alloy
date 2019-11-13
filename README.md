# [AlloyTeam ESLint 规则](https://alloyteam.github.io/eslint-config-alloy/)

[![Build Status](https://img.shields.io/travis/AlloyTeam/eslint-config-alloy.svg)](https://travis-ci.org/AlloyTeam/eslint-config-alloy) [![npm package](https://img.shields.io/npm/v/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![Greenkeeper badge](https://badges.greenkeeper.io/AlloyTeam/eslint-config-alloy.svg)](https://greenkeeper.io/)

AlloyTeam ESLint 规则不仅是一套先进的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。

## 快速开始

请根据你的项目使用的技术栈选择以下配置：

- [标准规则](#标准规则)
- [React](#react)
- [Vue](#vue)
- [TypeScript](#typescript)
- [TypeScript React](#typescript-react)

配置之间可以自由组合，如：

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/react',
    ]
}
```

## 先进性

AlloyTeam ESLint 规则的先进性体现在以下三个方面：

- 始终保持最新版本的 ESLint
- 覆盖率 100% 的测试和文档
- 高度的自动化

### 始终保持最新版本的 ESLint

AlloyTeam ESLint 规则始终保持最新版本的 ESLint 版本，包括解析器：

- [babel-eslint](https://github.com/babel/babel-eslint)
- [vue-eslint-parser](https://github.com/mysticatea/vue-eslint-parser)
- [@typescript-eslint/parser](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser)

以及规则：

- [标准规则](https://eslint.org/docs/rules/)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-vue](https://eslint.vuejs.org/rules/)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

### 覆盖率 100% 的测试和文档

AlloyTeam ESLint 规则奉行「测试即文档」，每个配置不仅配有一句话注释以及对应的错误示例和正确示例，而且还更进一步，将这些示例代码作为测试代码运行，保证了报错项与配置一一匹配。

- 所有 ESLint 配置均在 `test` 目录下
- 每一项配置存放在对应的目录下，如 `test/react/jsx-key/.eslintrc.js` 描述了规则 `react/jsx-key`
- 每一条配置都有一句话注释说明此配置的用途
- 对于有争议的配置，在注释中通过 `@reason` 说明了这么配置的原因
- 如果配置开启了，则必须有对应的示例，包括 `bad.js` 和 `good.js`
- 每个示例都会在真实的 ESLint 脚本中运行，以保证每次更新都向前兼容
- 由于配置和示例在一个目录下，故编辑器中可以直接看到错误信息
- 将测试中的配置、注释和示例输出为 html，生成[网站](https://alloyteam.github.io/eslint-config-alloy/)

### 高度的自动化

> 无情的推动自动化

- 由 `scripts/build.ts` 脚本将 `test` 目录下分散的配置生成整体的配置，并且生成网站中需要用到的 `site/config`
- 运行测试脚本 `test/index.ts` 会检查每个示例是否按照要求报错
- 运行 `scripts/rulesCoverage.ts` 保证当前配置覆盖了最新的 ESLint 规则，即：
    - 不包含被标记为 `deprecated` 的规则
    - 不包含 [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) 的规则（样式相关的规则交给更专业的 [Prettier](https://prettier.io/) 处理）
    - 包含所有其余可用的规则
- 通过 Prettier 保证代码样式的一致性
- 使用 travis-ci 保证主干通过以上测试
- 使用 travis-ci 自动构建并部署[网站](https://alloyteam.github.io/eslint-config-alloy/)
- 使用 greenkeeper 保证及时更新版本

## 配置原则

我们依据以下三条原则，研读了 ESLint 所有的配置项，定制出了心目中的「完美」ESLint 配置。

1. 能够帮助发现代码错误的规则，全部开启
2. 配置不应该依赖于某个具体项目，而应该全局合理
3. 帮助保持团队的代码风格统一，而不是限制开发体验

当然，也欢迎大家[提出不同的意见](https://github.com/AlloyTeam/eslint-config-alloy/issues/new)。

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
        'alloy',
    ],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
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
        'alloy',
        'alloy/react',
    ],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
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
        'alloy',
        'alloy/vue',
    ],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
    }
};
```

### TypeScript

安装：

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
    ],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
    }
};
```

### TypeScript React

安装：

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
```

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
    ],
    env: {
        // 这里填入你的项目用到的环境
        // 它们预定义了不同环境的全局变量，比如：
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 这里填入你的项目需要的全局变量
        // false 表示这个全局变量不允许被重新赋值，比如：
        //
        // myGlobal: false
    },
    rules: {
        // 这里填入你的项目需要的个性化配置
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

### 如何结合 Prettier 使用

AlloyTeam ESLint 规则从 v3 开始，已经不包含所有样式相关的规则了，故不需要引入 `eslint-config-prettier`。只需要安装 `prettier` 及相关 VSCode 插件即可。

下面给出一个 AlloyTeam 使用的 `prettier.config.js` 配置，仅供参考：

```js
// prettier.config.js or .prettierrc.js
module.exports = {
    // 一行最多 100 字符
    printWidth: 100,
    // 使用 4 个空格缩进
    tabWidth: 4,
    // 不使用缩进符，而使用空格
    useTabs: false,
    // 行尾需要有分号
    semi: true,
    // 使用单引号
    singleQuote: true,
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
    // 箭头函数，只有一个参数的时候，也需要括号
    arrowParens: 'always',
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
    rangeEnd: Infinity,
    // 不需要写文件开头的 @prettier
    requirePragma: false,
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 lf
    endOfLine: 'lf'
};
```

## Testing

```bash
npm test
```

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
# 检查当前是否覆盖了所有的规则
npm run test:rulesCoverage
# 发布新版本
npm version <major|minor|patch>
git push --follow-tags
npm publish
```

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
