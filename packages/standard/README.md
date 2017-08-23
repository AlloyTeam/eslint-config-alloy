# AlloyTeam ESLint 规则

本规则中包含了[所有 ESLint 规则](https://eslint.org/docs/rules/)，依据以下三条原则进行配置：

1. 能够帮助发现代码错误的规则，全部开启
2. 配置不依赖于某个具体项目，需要尽可能的合理
3. 帮助保持代码风格统一，而不是限制开发体验

本规则基于 ESLint 4.2.0

## 使用方法

### 安装

```bash
npm install --dev @alloyteam/eslint-config-standard babel-eslint
```

### 配置你的 .eslintrc.js

在你的项目根目录下创建 `.eslintrc.js`，并将以下内容复制到文件中：

```js
module.exports = {
    extends: [
        '@alloyteam/eslint-config-standard',
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        //
        // React: false,
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

## Testing

```bash
npm test
```
