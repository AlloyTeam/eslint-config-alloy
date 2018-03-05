/**
 * AlloyTeam ESLint 规则 - TypeScript React
 *
 * 包含所有 ESLint 规则，所有 eslint-plugin-typescript 规则，以及所有 eslint-plugin-react 规则
 * 使用 typescript-eslint-parser 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    extends: [
        './react.js',
        './typescript.js'
    ],
    rules: {
        //
        //
        // 覆盖掉 eslint-plugin-react 的规则
        //
        // @fixable 限制 jsx 的 children 缩进规则
        // @off 开启的话 eslint 会报错 Cannot read property 'type' of null
        'react/jsx-indent': 'off',
        // 组件内方法必须按照一定规则排序
        // @off 还不支持 properties https://github.com/yannickcr/eslint-plugin-react/issues/1342
        'react/sort-comp': 'off'
    }
};