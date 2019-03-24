/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *     xcatliu <xcatliu@gmail.com>
 *     heyli <lcxfs1991@gmail.com>
 *     DiamondYuan <admin@diamondyuan.com>
 *     Dash Chen <noreply@github.com>
 *     Swan <noreply@github.com>
 *
 * 依赖版本：
 *     eslint ^5.15.3
 *     eslint-plugin-react ^7.12.4
 *     eslint-plugin-vue ^5.2.2
 *     vue-eslint-parser ^6.0.3
 *     babel-eslint ^10.0.1
 *     @typescript-eslint/eslint-plugin ^1.5.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @category 此规则属于哪种分类
 * @reason 为什么要开启（关闭）此规则
 * @fixable 支持自动修复
 */
module.exports = {
    extends: ['./index.js'],
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
         * 定义了的 jsx element 必须使用
         * @category Enabling Correct ESLint Parsing
         */
        'vue/jsx-uses-vars': 'error',
        /**
         * 计算属性禁止包含异步方法
         * @category Error Prevention
         */
        'vue/no-async-in-computed-properties': 'error',
        /**
         * 禁止重复的二级键名
         * @category Error Prevention
         * @reason 没必要限制
         */
        'vue/no-dupe-keys': 'off',
        /**
         * 禁止出现重复的属性
         * @category Error Prevention
         */
        'vue/no-duplicate-attributes': 'error',
        /**
         * 禁止出现语法错误
         * @category Error Prevention
         */
        'vue/no-parsing-error': 'error',
        /**
         * 禁止覆盖保留字
         * @category Error Prevention
         */
        'vue/no-reserved-keys': 'error',
        /**
         * 组件的 data 属性的值必须是一个函数
         * @category Error Prevention
         * @reason 没必要限制
         */
        'vue/no-shared-component-data': 'off',
        /**
         * 禁止在计算属性中对属性修改
         * @category Error Prevention
         * @reason 太严格了
         */
        'vue/no-side-effects-in-computed-properties': 'off',
        /**
         * 禁止 <template> 使用 key 属性
         * @category Error Prevention
         * @reason 太严格了
         */
        'vue/no-template-key': 'off',
        /**
         * 禁止在 <textarea> 中出现 {{message}}
         * @category Error Prevention
         */
        'vue/no-textarea-mustache': 'error',
        /**
         * <component> 必须有 v-bind:is
         * @category Error Prevention
         */
        'vue/require-component-is': 'error',
        /**
         * render 函数必须有返回值
         * @category Error Prevention
         */
        'vue/require-render-return': 'error',
        /**
         * v-for 指令的元素必须有 v-bind:key
         * @category Error Prevention
         */
        'vue/require-v-for-key': 'error',
        /**
         * prop 的默认值必须匹配它的类型
         * @category Error Prevention
         * @reason 太严格了
         */
        'vue/require-valid-default-prop': 'off',
        /**
         * 计算属性必须有返回值
         * @category Error Prevention
         */
        'vue/return-in-computed-property': 'error',
        /**
         * template 的根节点必须合法
         * @category Error Prevention
         */
        'vue/valid-template-root': 'error',
        /**
         * v-bind 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-bind': 'error',
        /**
         * v-cloak 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-cloak': 'error',
        /**
         * v-else 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-else': 'error',
        /**
         * v-else-if 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-else-if': 'error',
        /**
         * v-for 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-for': 'error',
        /**
         * v-html 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-html': 'error',
        /**
         * v-if 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-if': 'error',
        /**
         * v-model 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-model': 'error',
        /**
         * v-on 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-on': 'error',
        /**
         * v-once 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-once': 'error',
        /**
         * v-pre 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-pre': 'error',
        /**
         * v-show 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-show': 'error',
        /**
         * v-text 指令必须合法
         * @category Error Prevention
         */
        'vue/valid-v-text': 'error',
        /**
         * 限制自定义组件的属性风格
         * @category Improving Readability
         * @reason 没必要限制
         * @fixable
         */
        'vue/attribute-hyphenation': 'off',
        /**
         * html 的结束标签必须符合规定
         * @category Improving Readability
         * @reason 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
         * @fixable
         */
        'vue/html-end-tags': 'off',
        /**
         * html 属性值必须用双引号括起来
         * @category Improving Readability
         */
        'vue/html-quotes': 'error',
        /**
         * 没有内容时，组件必须自闭和
         * @category Improving Readability
         * @reason 没必要限制
         * @fixable
         */
        'vue/html-self-closing': 'off',
        /**
         * 限制每行允许的最多属性数量
         * @category Improving Readability
         * @reason 没必要限制
         */
        'vue/max-attributes-per-line': 'off',
        /**
         * 限制组件的 name 属性的值的风格
         * @category Improving Readability
         * @reason 没必要限制
         * @fixable
         */
        'vue/name-property-casing': 'off',
        /**
         * 禁止出现连续空格
         * @category Improving Readability
         * @fixable
         */
        'vue/no-multi-spaces': 'error',
        /**
         * prop 必须有类型限制
         * @category Improving Readability
         * @reason 没必要限制
         */
        'vue/require-prop-types': 'off',
        /**
         * 限制 v-bind 的风格
         * @category Improving Readability
         * @reason 没必要限制
         * @fixable
         */
        'vue/v-bind-style': 'off',
        /**
         * 限制 v-on 的风格
         * @category Improving Readability
         * @reason 没必要限制
         * @fixable
         */
        'vue/v-on-style': 'off',
        /**
         * 组件的属性必须为一定的顺序
         * @category Minimizing Arbitrary Choices and Cognitive Overhead
         */
        'vue/order-in-components': 'error'
    }
};
