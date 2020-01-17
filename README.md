# [eslint-config-alloy][website]

[![Build Status](https://img.shields.io/travis/AlloyTeam/eslint-config-alloy.svg)](https://travis-ci.org/AlloyTeam/eslint-config-alloy) [![npm package](https://img.shields.io/npm/v/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![npm downloads](http://img.shields.io/npm/dm/eslint-config-alloy.svg)](https://www.npmjs.org/package/eslint-config-alloy) [![Greenkeeper badge](https://badges.greenkeeper.io/AlloyTeam/eslint-config-alloy.svg)](https://greenkeeper.io/)

English / [简体中文](./README.zh-CN.md)

---

The AlloyTeam ESLint config is not only a progressive ESLint config for your React/Vue/TypeScript projects, but also the best reference for configuring your personalized ESLint rules.

## Quick start

Please choose the following configuration based on the technology stack used by your project:

- [Built-in](#built-in)
- [React](#react)
- [Vue](#vue)
- [TypeScript](#typescript)
- [TypeScript React](#typescript-react)

## Philosophy

- Let [Prettier][] handle style-related rules
- Inherit [ESLint's philosophy](https://eslint.org/docs/about/#philosophy) and help everyone build their own rules
- High degree of automation: advanced rules management, test as document as [website][]
- Keep up with the times, follow up the latest rules as soon as possible

### Let [Prettier][] handle style-related rules

Prettier is a code formatting tool that offers fewer options but is more professional than the style-related rules in ESLint.

Now that Prettier has become a necessary tool in front-end projects, eslint-config-alloy does not need to maintain the style-related rules in ESLint anymore, so we completely removed all Prettier related rules in the v3 version, and use ESLint to check logical errors which it's good at.

As for whether two spaces or four spaces are used for indentation and whether there is a semicolon at the end, you can configure it in the project's `.prettierrc.js`. Of course, we also provide a recommended Prettier configuration for your reference.

### Inherit [ESLint's philosophy][] and help everyone build their own rules

Don't you remember how ESLint defeated JSHint and became the most popular JS code inspection tool? It is because of the plugin and configuration that ESLint advocates, which meets the individual needs of different technology stacks of different teams.

Therefore, eslint-config-alloy also inherits the philosophy of ESLint. It will not emphasize the need to use our config. Instead, we help you to make your own config by reference our completed documents, examples, tests, websites, etc.

### High degree of automation: advanced rules management, test as document as [website][]

> Relentless push automation

eslint-config-alloy uses a high degree of automation to hand over all processes that can be managed automatically, including:

- Through greenkeeper and travis-ci, automatically check whether ESLint and related plugins have new versions, and if there are new rules in the new version which we need to add
- Automatically check if our rules include Prettier rules
- Automatically check if our rules include deprecated rules

In addition, through automated scripts, we can even divide and conquer thousands of ESLint configuration files, and each rule is managed in a separate directory:

- Integrate single configurations into a final configuration through a script
- The description and reason in single configurations are built into a [website][] by script for everyone to view
- The `bad.js` and` good.js` in a single configuration are output to [website][] by script, and you can even see the error message (which are run in a real ESLint script) in the `bad.js` of [website][]

The benefits of this are very obvious, test as document as [website][]. We can maintain the rules and tests in one place. Other tasks are handed over to the automated script, which greatly reduces the maintenance cost. In short, when we have a new rule to add, we only need to write three files `test/index/another-rule/.eslintrc.js`, `test/index/another-rule/bad.js`, `test/index/another-rule/good.js`.

### Keep up with the times, follow up the latest rules as soon as possible

ESLint is updated very quickly, there is a new version almost every week, sometimes there are new rules, sometimes existing rules are deprecated, and related plug-ins (React/Vue/TypeScript) will be updated from time to time. Without automation tools, it is difficult follow up.

And eslint-config-alloy can receive the [greenkeeper issue] (https://github.com/AlloyTeam/eslint-config-alloy/issues/127) as soon as possible through the above automation tools, tell us which plugin has been updated, and the [travis-ci build log](https://travis-ci.org/AlloyTeam/eslint-config-alloy/builds/616828848) will tell us which rules need to be added:

![](https://i.v2ex.co/zDK6Uao4.png)

In this way, we can follow the latest rules in time when the front-end community is changing rapidly, and always keep the vitality and advanced of eslint-config-alloy.

## Usage

### Built-in

```bash
npm install --save-dev eslint babel-eslint eslint-config-alloy
```

Create an `.eslintrc.js` in the root directory of your project, then copy the following content into it:

```js
module.exports = {
    extends: [
        'alloy',
    ],
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
    }
};
```

### React

```bash
npm install --save-dev eslint babel-eslint eslint-plugin-react eslint-config-alloy
```

Create an `.eslintrc.js` in the root directory of your project, then copy the following content into it:

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/react',
    ],
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
    }
};
```

### Vue

```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-alloy
```

Create an `.eslintrc.js` in the root directory of your project, then copy the following content into it:

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/vue',
    ],
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
    }
};
```

### TypeScript

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy
```

Create an `.eslintrc.js` in the root directory of your project, then copy the following content into it:

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/typescript',
    ],
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
    }
};
```

### TypeScript React

```bash
npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-config-alloy
```

Create an `.eslintrc.js` in the root directory of your project, then copy the following content into it:

```js
module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        'alloy/typescript',
    ],
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
    }
};
```

## Troubleshootings

### With VSCode

ESLint will not lint `.vue`, `.ts` or `.tsx` files in VSCode by default, you need to set your `.vscode/settings.json` like this:

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

### autoFixOnSave not work

If you want to auto fix on save for `.vue`, `.ts` or `.tsx` files, you need to set your `.vscode/settings.json` like this:

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

### With Prettier

eslint-config-alloy do not include all style-related rules in v3, so there is no need to install `eslint-config-prettier`. Just install `prettier` and related VSCode plugins.

Here is a `.prettierrc.js` configuration used by AlloyTeam for reference only:

```js
// .prettierrc.js
module.exports = {
    // max 100 characters per line
    printWidth: 100,
    // use 4 spaces for indentation
    tabWidth: 4,
    // use spaces instead of indentations
    useTabs: false,
    // semicolon at the end of the line
    semi: true,
    // use single quotes
    singleQuote: true,
    // object's key is quoted only when necessary
    quoteProps: 'as-needed',
    // use double quotes instead of single quotes in jsx
    jsxSingleQuote: false,
    // no comma at the end
    trailingComma: 'none',
    // spaces are required at the beginning and end of the braces
    bracketSpacing: true,
    // end tag of jsx need to wrap
    jsxBracketSameLine: false,
    // brackets are required for arrow function parameter, even when there is only one parameter
    arrowParens: 'always',
    // format the entire contents of the file
    rangeStart: 0,
    rangeEnd: Infinity,
    // no need to write the beginning @prettier of the file
    requirePragma: false,
    // No need to automatically insert @prettier at the beginning of the file
    insertPragma: false,
    // use default break criteria
    proseWrap: 'preserve',
    // decide whether to break the html according to the display style
    htmlWhitespaceSensitivity: 'css',
    // lf for newline
    endOfLine: 'lf'
};
```

## Scripts

```bash
# install dependencies
npm i
# build eslintrc like index.js, react.js, etc.
npm run build
# run tests
npm test
# autofix ESLint errors
npm run eslint:fix
# autofix prettier errors
npm run prettier:fix
# check if all rules are currently covered
npm run test:rulesCoverage
# publish new version
npm version <major|minor|patch>
git push --follow-tags
npm publish
```

## Q & A

### Why anthor ESLint config

In fact, our team initially used airbnb rules, but because it was too strict, some rules still needed to be personalized, which led to more and more changes in the future, and finally decided to maintain a new set. After more than two years of polishing, eslint-config-alloy is now very mature and progressive, and has been welcomed by many teams inside and outside the company.

### Why not standard

The standard specification believes that everyone should not waste time in personalized specifications, but the entire community should unify a specification. This statement makes some sense, but it runs counter to ESLint's design philosophy. Don't you remember how ESLint defeated JSHint and became the most popular JS code inspection tool? It is because of the plugin and configuration that ESLint advocates, which meets the individual needs of different technology stacks of different teams.

Therefore, eslint-config-alloy also inherits the philosophy of ESLint. It will not emphasize the need to use our config. Instead, we help you to make your own config by reference our completed documents, examples, tests, websites, etc.

### Why not airbnb

1. eslint-config-alloy has officially maintained vue, typescript and react+typescript rules. In contrast, airbnb's vue and typescript are maintained by third parties.
2. Progressive to ensure that we can keep up with the times, as mentioned earlier
3. Convenient personalization, including explanations and website examples

### Looks good, but I still choose airbnb

It ’s okay, eslint-config-alloy believes that different teams and projects can have different configurations from the design concept. Although you choose to use airbnb, you can still come to us [website][] when you have personalized configuration needs.

## Reference

- [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

[Prettier]: https://prettier.io/
[website]: https://alloyteam.github.io/eslint-config-alloy/
[ESLint's philosophy]: https://eslint.org/docs/about/#philosophy
