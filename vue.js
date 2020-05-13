/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     Swan <noreply@github.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     lzw <mingxin2014@gmail.com>
 *     ryoliu <sfesh@163.com>
 *     sunhui04 <sunhui04@meituan.com>
 *
 * 依赖版本：
 *     eslint ^7.0.0
 *     babel-eslint ^10.1.0
 *     eslint-plugin-react ^7.20.0
 *     vue-eslint-parser ^7.0.0
 *     eslint-plugin-vue ^6.2.2
 *     @typescript-eslint/parser ^2.33.0
 *     @typescript-eslint/eslint-plugin ^2.33.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @reason 为什么要开启（关闭）此规则
 */
module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 设置 js 的解析器为 babel-eslint
        // https://github.com/mysticatea/vue-eslint-parser#-options
        parser: 'babel-eslint',
        ecmaVersion: 2019,
        // ECMAScript modules 模式
        sourceType: 'module',
        ecmaFeatures: {
            // 不允许 return 语句出现在 global 环境下
            globalReturn: false,
            // 开启全局 script 模式
            impliedStrict: true,
            jsx: true
        },
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false
    },
    plugins: ['vue'],
    rules: {
        /**
         * 限制自定义组件的属性风格
         */
        'vue/attribute-hyphenation': 'off',
        /**
         * 标签属性必须按规则排序
         */
        'vue/attributes-order': 'error',
        /**
         * 变量名必须是 camelcase 风格的
         * @reason 很多 api 或文件名都不是 camelcase 风格的
         */
        'vue/camelcase': 'off',
        /**
         * 支持在模版中使用 eslint-disable-next-line 等注释
         */
        'vue/comment-directive': 'error',
        /**
         * 组件的 name 属性必须符合 PascalCase
         * @reason 这是官方建议的规范
         */
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        /**
         * 限制组件名的风格
         */
        'vue/component-name-in-template-casing': 'off',
        /**
         * 组件中必须按照 <script>, <template>, <style> 排序
         * @reason 这是官方建议的顺序
         */
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ],
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        'vue/eqeqeq': ['error', 'always'],
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         */
        'vue/jsx-uses-vars': 'error',
        /**
         * 组件名称必须和文件名一致
         */
        'vue/match-component-file-name': 'off',
        /**
         * 限制组件的 name 属性的值的风格
         */
        'vue/name-property-casing': 'off',
        /**
         * 计算属性禁止包含异步方法
         */
        'vue/no-async-in-computed-properties': 'error',
        /**
         * 禁止给布尔值 props 添加默认值
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/no-boolean-default': 'off',
        /**
         * 禁用已废弃的 scope 属性
         */
        'vue/no-deprecated-scope-attribute': 'error',
        /**
         * 使用 v-slot 替代已废弃的 slot
         */
        'vue/no-deprecated-slot-attribute': 'error',
        /**
         * 禁用已废弃的 slot-scope
         */
        'vue/no-deprecated-slot-scope-attribute': 'error',
        /**
         * 禁止重复的键名
         */
        'vue/no-dupe-keys': 'error',
        /**
         * 禁止出现重复的属性
         */
        'vue/no-duplicate-attributes': [
            'error',
            {
                allowCoexistClass: false,
                allowCoexistStyle: false
            }
        ],
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'vue/no-empty-pattern': 'error',
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式、模版字符串中或 HTML 内容中
         */
        'vue/no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true,
                skipHTMLTextContents: true
            }
        ],
        /**
         * 禁止出现语法错误
         */
        'vue/no-parsing-error': 'error',
        /**
         * 组件的 name 属性静止使用保留字
         */
        'vue/no-reserved-component-names': 'error',
        /**
         * 禁止覆盖保留字
         */
        'vue/no-reserved-keys': 'error',
        /**
         * 禁止使用指定的语法
         */
        'vue/no-restricted-syntax': 'off',
        /**
         * 组件的 data 属性的值必须是一个函数
         */
        'vue/no-shared-component-data': 'off',
        /**
         * 禁止在计算属性中对属性修改
         */
        'vue/no-side-effects-in-computed-properties': 'off',
        /**
         * 禁止使用 style 属性
         */
        'vue/no-static-inline-styles': 'off',
        /**
         * 禁止 <template> 使用 key 属性
         */
        'vue/no-template-key': 'off',
        /**
         * 模版中的变量名禁止与前一个作用域重名
         */
        'vue/no-template-shadow': 'off',
        /**
         * 禁止在 <textarea> 中出现模版语法 {{message}}
         */
        'vue/no-textarea-mustache': 'error',
        /**
         * 当你的 vue 版本较老时，禁用还未支持的语法
         */
        'vue/no-unsupported-features': 'off',
        /**
         * 禁止定义在 components 中的组件未使用
         */
        'vue/no-unused-components': 'error',
        /**
         * 模版中已定义的变量必须使用
         */
        'vue/no-unused-vars': 'error',
        /**
         * 禁止在同一个元素上使用 v-if 和 v-for 指令
         */
        'vue/no-use-v-if-with-v-for': 'error',
        /**
         * 禁止使用 v-html
         */
        'vue/no-v-html': 'off',
        /**
         * 组件的属性必须为一定的顺序
         */
        'vue/order-in-components': 'error',
        /**
         * <template> <script> <style> 之间必须由空行
         * @reason 代码格式问题，最好由 Prettier 解决
         */
        'vue/padding-line-between-blocks': 'off',
        /**
         * props 必须用驼峰式
         */
        'vue/prop-name-casing': 'off',
        /**
         * <component> 必须有绑定的组件
         */
        'vue/require-component-is': 'error',
        /**
         * props 如果不是 required 的字段，必须有默认值
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/require-default-prop': 'off',
        /**
         * 必须直接使用 export default 导出组件
         */
        'vue/require-direct-export': 'off',
        /**
         * 组件必须包含 name 属性
         */
        'vue/require-name-property': 'off',
        /**
         * props 的取值必须是基本类型的构造函数，而不是字符串
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/require-prop-type-constructor': 'off',
        /**
         * prop 必须有类型限制
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/require-prop-types': 'off',
        /**
         * render 函数必须有返回值
         */
        'vue/require-render-return': 'error',
        /**
         * v-for 指令的元素必须有 v-bind:key
         */
        'vue/require-v-for-key': 'error',
        /**
         * prop 的默认值必须匹配它的类型
         * @reason 类型相关的约束交给 TypeScript
         */
        'vue/require-valid-default-prop': 'off',
        /**
         * 计算属性必须有返回值
         */
        'vue/return-in-computed-property': 'error',
        /**
         * props 的键名必须排好序
         */
        'vue/sort-keys': 'off',
        /**
         * class 的值必须按字母排序
         */
        'vue/static-class-names-order': 'off',
        /**
         * 禁止在模版中用 this
         */
        'vue/this-in-template': 'error',
        /**
         * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
         */
        'vue/use-v-on-exact': 'error',
        /**
         * 使用缩写的 : 而不是 v-bind:
         */
        'vue/v-bind-style': 'error',
        /**
         * 禁止在 v-on 的值中调用函数
         */
        'vue/v-on-function-call': 'error',
        /**
         * 使用缩写的 @click 而不是 v-on:click
         */
        'vue/v-on-style': 'error',
        /**
         * 使用缩写的 #one 而不是 v-slot:one
         */
        'vue/v-slot-style': 'off',
        /**
         * template 的根节点必须合法
         */
        'vue/valid-template-root': 'error',
        /**
         * v-bind 指令必须合法
         */
        'vue/valid-v-bind': 'error',
        /**
         * v-bind:foo.sync 指令必须合法
         */
        'vue/valid-v-bind-sync': 'error',
        /**
         * v-cloak 指令必须合法
         */
        'vue/valid-v-cloak': 'error',
        /**
         * v-else 指令必须合法
         */
        'vue/valid-v-else': 'error',
        /**
         * v-else-if 指令必须合法
         */
        'vue/valid-v-else-if': 'error',
        /**
         * v-for 指令必须合法
         */
        'vue/valid-v-for': 'error',
        /**
         * v-html 指令必须合法
         */
        'vue/valid-v-html': 'error',
        /**
         * v-if 指令必须合法
         */
        'vue/valid-v-if': 'error',
        /**
         * v-model 指令必须合法
         */
        'vue/valid-v-model': 'error',
        /**
         * v-on 指令必须合法
         */
        'vue/valid-v-on': 'error',
        /**
         * v-once 指令必须合法
         */
        'vue/valid-v-once': 'error',
        /**
         * v-pre 指令必须合法
         */
        'vue/valid-v-pre': 'error',
        /**
         * v-show 指令必须合法
         */
        'vue/valid-v-show': 'error',
        /**
         * v-slot 指令必须合法
         */
        'vue/valid-v-slot': 'error',
        /**
         * v-text 指令必须合法
         */
        'vue/valid-v-text': 'error'
    }
};
