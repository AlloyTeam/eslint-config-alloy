# [eslint-config-alloy][网站]

**最新特性：eslint-config-alloy 现已支持 TypeScript 5.0**  
如果你使用的是 TypeScript 4.0，请安装旧版 `npm install --save-dev eslint-config-alloy@4`

**最新特性：eslint-config-alloy 现已支持 Vue 3.0**  
如果你使用的是 Vue 2.0，请安装旧版 `npm install --save-dev eslint-config-alloy@3`

AlloyTeam ESLint 规则不仅是一套先进的适用于 React/Vue/Typescript 项目的 ESLint 配置规范，而且也是你配置个性化 ESLint 规则的最佳参考。

## 快速开始

请根据你的项目使用的技术栈选择以下配置：

- [内置规则](#内置规则)
- [React](#react)
- [Vue](#vue)
- [TypeScript](#typescript)
- [TypeScript React](#typescript-react)
- [TypeScript Vue](#typescript-vue)

## 设计理念

- 样式相关的规则交给 [Prettier][] 管理
- 传承 ESLint 的理念，帮助大家建立自己的规则
- 高度的自动化：先进的规则管理，测试即文档即[网站][]
- 与时俱进，第一时间跟进最新的规则

<details>
<summary>详细说明</summary>

### 样式相关的规则交给 [Prettier][] 管理

Prettier 是一个代码格式化工具，相比于 ESLint 中的代码格式规则，它提供了更少的选项，但是却更加专业。

如今 Prettier 已经成为前端项目中的必备工具，eslint-config-alloy 也没有必要再去维护 ESLint 中的代码格式相关的规则了，所以我们在 v3 版本中彻底去掉了所有 Prettier 相关的规则，用 ESLint 来检查它更擅长的逻辑错误。

至于缩进要两个空格还是四个空格，末尾要不要分号，可以在项目的 `.prettierrc.js` 中去配置，当然我们也提供了一份推荐的 Prettier 配置供大家参考。

### 传承 [ESLint 的理念][]，帮助大家建立自己的规则

大家还记得 ESLint 是怎么打败 JSHint 成为最受欢迎的 js 代码检查工具吗？就是因为 ESLint 推崇的插件化、配置化，满足了不同团队不同技术栈的个性的需求。

所以 eslint-config-alloy 也传承了 ESLint 的设计理念，不会强调必须要使用我们这套规则，而是通过文档、示例、测试、网站等方便大家参考 alloy 的规则，在此基础上做出自己的个性化。

由于 React/Vue/TypeScript 插件的文档没有中文化（或中文的版本很滞后），所以 alloy 的文档很大程度上帮助了国内开发者理解和配置个性化的规则。

实际上国内有很多团队或个人的 ESLint 配置，都参考了 alloy 的文档。

### 高度的自动化：先进的规则管理，测试即文档即[网站][]

> 无情的推动自动化

eslint-config-alloy 通过高度的自动化，将一切能自动化管理的过程都交给脚本处理，其中包括了：

- 通过 GitHub Actions，自动每周检查 ESLint 及相关插件是否有新版本，新版本中是否有新规则需要我们添加
- 自动检查我们的规则是否包含了 Prettier 的规则
- 自动检查我们的规则是否包含了已废弃（deprecated）的规则

除此之外，通过自动化的脚本，我们甚至可以将成百上千个 ESLint 配置文件分而治之，每个规则在一个单独的目录下管理：

- 通过脚本将单个的配置整合成最终的一个配置
- 通过脚本将单个配置中的 description 和 reason 构建成文档[网站][]，方便大家查看
- 通过脚本将单个配置中的 `bad.js` 和 `good.js` 输出到[网站][]中，甚至可以直接在[网站][]中看到 `bad.js` 的（真实运行 ESLint 脚本后的）报错信息

这样的好处是显而易见的，测试即文档即[网站][]，我们可以只在一个地方维护规则和测试，其他工作都交给自动化脚本，极大的降低了维护的成本。简单来说，当我们有个新规则需要添加时，只需要写三个文件 `test/index/another-rule/.eslintrc.js`, `test/index/another-rule/bad.js`, `test/index/another-rule/good.js` 即可。

### 与时俱进，第一时间跟进最新的规则

ESLint 的更新很快，几乎每周都有一个新版本，有时有新规则，有时会废弃已有规则，而且相关插件（React/Vue/TypeScript）也会时而更新，没有自动化工具的话，实在是难以跟进。

而 eslint-config-alloy 通过上述的自动化工具，可以在第一时间就收到 GitHub Actions 的通知，告诉我们哪些规则需要添加：

![](https://i.v2ex.co/zDK6Uao4.png)

这样就实现了，在前端社区快速更迭的时候能够及时跟进最新的规则，永远保持 eslint-config-alloy 的活力和先进。

</details>

## 使用方法

### 内置规则

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser eslint-config-alloy
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'alloy',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### React

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser @babel/preset-react@latest eslint-plugin-react eslint-config-alloy
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'alloy',
    'alloy/react',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### Vue

```bash
npm install --save-dev eslint @babel/core @babel/eslint-parser vue-eslint-parser eslint-plugin-vue eslint-config-alloy
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'alloy',
    'alloy/vue',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### TypeScript

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'alloy',
    'alloy/typescript',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### TypeScript React

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: [
    'alloy',
    'alloy/react',
    'alloy/typescript',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### TypeScript Vue

建议使用 `npm init vue@3` 创建集成了 Vue, TypeScript 和 ESLint 的项目，然后再参考[此示例](./examples/typescript-vue/.eslintrc.js)调整其 ESLint 配置。

常规方法如下：

```bash
npm install --save-dev @babel/core @babel/eslint-parser @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript eslint eslint-config-alloy eslint-plugin-vue vue-eslint-parser
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
  extends: ['alloy', 'alloy/vue', 'alloy/typescript'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',

      // Leave the template parser unspecified, so that it could be determined by `<script lang="...">`
    },
  },
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  },
};
```

## 常见问题

### 在 VSCode 中使用

在 VSCode 中安装 ESLint 扩展即可。

参考[这里](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)可以对扩展进行配置。

### 保存时自动修复 ESLint 错误

如果想要开启「保存时自动修复」的功能，你需要配置 `.vscode/settings.json`：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
}
```

### 如何结合 Prettier 使用

eslint-config-alloy 从 v3 开始，已经不包含所有样式相关的规则了，故不需要引入 `eslint-config-prettier`。只需要安装 `prettier` 及相关 VSCode 插件即可。

AlloyTeam 提供了一套 Prettier 配置，你可以创建一个 `.prettierrc` 文件，直接复用此配置：

```json
"eslint-config-alloy/.prettierrc.js"
```

VSCode 的一个最佳实践就是通过配置 `.vscode/settings.json` 来支持自动修复 Prettier 和 ESLint 错误：

```json
{
  "files.eol": "\n",
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 常用命令

```bash
# 安装依赖
pnpm i
# 构建 index.js react.js 等 eslintrc 配置
pnpm build
# 执行测试
pnpm test
# 自动修复格式错误
pnpm prettier:fix
# 检查是否覆盖了所有的规则
pnpm rulesCoverage
# 发布新版本
npm version <major|minor|patch>
git push --follow-tags
npm publish
```

## Q & A

### 为什么要重复造轮子

其实我们团队最开始使用 airbnb 规则，但是由于它过于严格，部分规则还是需要个性化，导致后来越改越多，最后决定重新维护一套。经过四年多的打磨，现在 eslint-config-alloy 已经非常成熟与先进，也受到了公司内外很多团队的欢迎。

### 为什么不用 standard

standard 规范认为大家不应该浪费时间在个性化的规范了，而应该整个社区统一一份规范。这种说法有一定道理，但是它是与 ESLint 的设计理念背道而驰的。大家还记得 ESLint 是怎么打败 JSHint 成为最受欢迎的 js 代码检查工具吗？就是因为 ESLint 推崇的插件化、配置化，满足了不同团队不同技术栈的个性的需求。

所以 eslint-config-alloy 也传承了 ESLint 的设计理念，不会强调必须要使用我们这套规则，而是通过文档、示例、测试、网站等方便大家参考 alloy 的规则，在此基础上做出自己的个性化。

由于 React/Vue/TypeScript 插件的文档没有中文化（或中文的版本很滞后），所以 alloy 的文档很大程度上帮助了国内开发者理解和配置个性化的规则。

实际上国内有很多团队或个人公开的 ESLint 配置，都参考了 alloy 的文档。

### 相比于 airbnb 规则有什么优势

1. eslint-config-alloy 拥有官方维护的 vue、typescript、react+typescript 规则，相比之下 airbnb 的 vue 和 typescript 都是第三方维护的
2. 先进性，保证能够与时俱进，前面已经重点提到了
3. 方便个性化定制，包含中文讲解和网站示例

### 你这个确实很好，我还是会选择 airbnb

没关系，eslint-config-alloy 从设计理念上就相信不同团队不同项目可以有不同的配置，虽然你选择使用 airbnb，但是当你有个性化配置需求的时候，还是可以来我们[网站][]上参考一下哦~

## 参考

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

[Prettier]: https://prettier.io/
[网站]: https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN
[ESLint 的理念]: https://eslint.org/docs/about/#philosophy
