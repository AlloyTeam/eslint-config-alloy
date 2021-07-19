/**
 * AlloyTeam ESLint 规则
 * https://alloyteam.github.io/eslint-config-alloy/
 *
 * 贡献者：
 *   xcatliu <xcatliu@gmail.com>
 *   heyli <lcxfs1991@gmail.com>
 *   Swan <noreply@github.com>
 *   DiamondYuan <admin@diamondyuan.com>
 *   Dash Chen <noreply@github.com>
 *   lzw <mingxin2014@gmail.com>
 *   ryoliu <sfesh@163.com>
 *   sunhui04 <sunhui04@meituan.com>
 *
 * 依赖版本：
 *   eslint ^7.31.0
 *   @babel/eslint-parser ^7.14.7
 *   @babel/preset-react ^7.14.5
 *   eslint-plugin-react ^7.24.0
 *   vue-eslint-parser ^7.9.0
 *   eslint-plugin-vue ^7.14.0
 *   @typescript-eslint/parser ^4.28.3
 *   @typescript-eslint/eslint-plugin ^4.28.3
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 设置 js 的解析器为 @babel/eslint-parser
    // https://github.com/mysticatea/vue-eslint-parser#-options
    parser: '@babel/eslint-parser',
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
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
     * 变量名必须是 camelCase 风格的
     * @reason 很多 api 或文件名都不是 camelCase 风格的
     */
    camelcase: 'off',
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
        order: [['script', 'template'], 'style'],
      },
    ],
    /**
     * 自定义事件名必须用 kebab-case 风格
     */
    'vue/custom-event-name-casing': 'error',
    /**
     * 禁止使用 foo['bar']，必须写成 foo.bar
     * @reason 当需要写一系列属性的时候，可以更统一
     */
    'dot-notation': 'off',
    'vue/dot-notation': 'off',
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    eqeqeq: 'off',
    'vue/eqeqeq': ['error', 'always'],
    /**
     * button 标签必须有 type 属性
     */
    'vue/html-button-has-type': 'off',
    /**
     * HTML 注释的 <!-- 后必须有空格或换行符
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/html-comment-content-newline': 'off',
    /**
     * HTML 注释必须有首位空格
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/html-comment-content-spacing': 'off',
    /**
     * HTML 注释缩进必须有两个空格
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/html-comment-indent': 'off',
    /**
     * 修复 no-unused-vars 不检查 jsx 的问题
     */
    'vue/jsx-uses-vars': 'error',
    /**
     * 组件名称必须和文件名一致
     */
    'vue/match-component-file-name': 'off',
    /**
     * 多行属性之间必须有空行
     * @reason 代码格式问题，最好由 Prettier 解决
     */
    'vue/new-line-between-multi-line-property': 'off',
    /**
     * nextTick 必须使用 Promise 模式调用
     */
    'vue/next-tick-style': 'off',
    /**
     * watch 中禁止使用箭头函数
     */
    'vue/no-arrow-functions-in-watch': 'error',
    /**
     * 计算属性禁止包含异步方法
     */
    'vue/no-async-in-computed-properties': 'error',
    /**
     * 禁止 <template> 中使用字符串
     */
    'vue/no-bare-strings-in-template': 'off',
    /**
     * 禁止给布尔值 props 添加默认值
     * @reason 类型相关的约束交给 TypeScript
     */
    'vue/no-boolean-default': 'off',
    /**
     * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
     */
    'no-constant-condition': 'off',
    'vue/no-constant-condition': 'off',
    /**
     * 禁止自定义的 v-modal 修饰语
     */
    'vue/no-custom-modifiers-on-v-model': 'error',
    /**
     * 禁止在 data 中使用已废弃的对象定义
     */
    'vue/no-deprecated-data-object-declaration': 'error',
    /**
     * 禁止使用已废弃的 destroyed 和 beforeDestroy 生命周期
     */
    'vue/no-deprecated-destroyed-lifecycle': 'error',
    /**
     * 禁止使用已废弃的 $listeners
     */
    'vue/no-deprecated-dollar-listeners-api': 'error',
    /**
     * 禁止使用已废弃的 $scopedSlots
     */
    'vue/no-deprecated-dollar-scopedslots-api': 'error',
    /**
     * 禁止使用已废弃的 events 接口
     */
    'vue/no-deprecated-events-api': 'error',
    /**
     * 禁止使用已废弃的 filters 语法
     */
    'vue/no-deprecated-filter': 'error',
    /**
     * 禁止使用已废弃的 functional 模版
     */
    'vue/no-deprecated-functional-template': 'error',
    /**
     * 禁止使用已废弃的 is 属性
     */
    'vue/no-deprecated-html-element-is': 'error',
    /**
     * 禁止使用已废弃的 inline-template 属性
     */
    'vue/no-deprecated-inline-template': 'error',
    /**
     * 禁止使用已废弃的 this
     */
    'vue/no-deprecated-props-default-this': 'error',
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
     * 禁止在 v-bind 指令中使用已废弃的 .sync 修饰符
     */
    'vue/no-deprecated-v-bind-sync': 'error',
    /**
     * 禁用已废弃的 v-is 指令
     */
    'vue/no-deprecated-v-is': 'error',
    /**
     * 禁止使用已废弃的 .native 修饰符
     */
    'vue/no-deprecated-v-on-native-modifier': 'error',
    /**
     * 禁止使用已废弃的数字修饰符
     */
    'vue/no-deprecated-v-on-number-modifiers': 'error',
    /**
     * 禁止使用已废弃的 Vue.config.keyCodes
     */
    'vue/no-deprecated-vue-config-keycodes': 'error',
    /**
     * 禁止重复的键名
     */
    'vue/no-dupe-keys': 'error',
    /**
     * 禁止在 v-if 和 v-else-if 中出现重复的测试表达式
     */
    'vue/no-dupe-v-else-if': 'error',
    /**
     * 使用 v-bind="$attrs" 时 inheritAttrs 必须是 false
     */
    'vue/no-duplicate-attr-inheritance': 'error',
    /**
     * 禁止出现重复的属性
     */
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: false,
        allowCoexistStyle: false,
      },
    ],
    /**
     * 禁止 <template> <script> <style> 为空
     */
    'vue/no-empty-component-block': 'error',
    /**
     * 禁止解构赋值中出现空 {} 或 []
     */
    'no-empty-pattern': 'off',
    'vue/no-empty-pattern': 'error',
    /**
     * 禁止在 <script setup> 中使用 export
     */
    'vue/no-export-in-script-setup': 'error',
    /**
     * 禁止 model 中出现错误的属性
     */
    'vue/no-invalid-model-keys': 'error',
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式、模版字符串中或 HTML 内容中
     */
    'no-irregular-whitespace': 'off',
    'vue/no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
        skipHTMLTextContents: true,
      },
    ],
    /**
     * 禁止异步注册生命周期
     */
    'vue/no-lifecycle-after-await': 'error',
    /**
     * 禁止出现没必要的 <template>
     */
    'vue/no-lone-template': 'error',
    /**
     * 禁止 class 中出现复数的对象
     */
    'vue/no-multiple-objects-in-class': 'error',
    /**
     * 禁止给 scoped slots 传递多个参数
     */
    'vue/no-multiple-slot-args': 'error',
    /**
     * 禁止模版中有多个根节点
     */
    'vue/no-multiple-template-root': 'error',
    /**
     * 禁止修改组件的 props
     */
    'vue/no-mutating-props': 'error',
    /**
     * 禁止出现语法错误
     */
    'vue/no-parsing-error': 'error',
    /**
     * 禁止潜在的拼写错误
     */
    'vue/no-potential-component-option-typo': 'off',
    /**
     * 禁止直接使用由 ref 生成的变量，必须使用它的 value
     */
    'vue/no-ref-as-operand': 'error',
    /**
     * 组件的 name 属性静止使用保留字
     */
    'vue/no-reserved-component-names': 'error',
    /**
     * 禁止覆盖保留字
     */
    'vue/no-reserved-keys': 'error',
    /**
     * 禁止在模版中使用指定的 block
     */
    'vue/no-restricted-block': 'off',
    /**
     * 禁止 await 后调用指定的函数
     */
    'vue/no-restricted-call-after-await': 'off',
    /**
     * 禁止使用指定的组件选项
     */
    'vue/no-restricted-component-options': 'off',
    /**
     * 禁止使用特定的自定义事件
     */
    'vue/no-restricted-custom-event': 'off',
    /**
     * 禁止使用特定的 props
     */
    'vue/no-restricted-props': 'off',
    /**
     * 禁止使用指定的属性
     */
    'vue/no-restricted-static-attribute': 'off',
    /**
     * 禁止使用指定的语法
     */
    'no-restricted-syntax': 'off',
    'vue/no-restricted-syntax': 'off',
    /**
     * 禁止使用指定的 v-bind 参数
     */
    'vue/no-restricted-v-bind': 'off',
    /**
     * 禁止对 setup 中的 props 解构
     */
    'vue/no-setup-props-destructure': 'error',
    /**
     * 组件的 data 属性的值必须是一个函数
     */
    'vue/no-shared-component-data': 'off',
    /**
     * 禁止在计算属性中对属性修改
     */
    'vue/no-side-effects-in-computed-properties': 'off',
    /**
     * 禁止在数组中出现连续的逗号
     */
    'no-sparse-arrays': 'off',
    'vue/no-sparse-arrays': 'error',
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
     * 添加了 target="_blank" 属性时，必须添加 rel="noopener noreferrer"
     */
    'vue/no-template-target-blank': 'off',
    /**
     * 禁止在 <textarea> 中出现模版语法 {{message}}
     */
    'vue/no-textarea-mustache': 'error',
    /**
     * 禁止在 beforeRouteEnter 方法中使用 this
     */
    'vue/no-this-in-before-route-enter': 'error',
    /**
     * 禁止使用未注册的组件
     */
    'vue/no-unregistered-components': 'off',
    /**
     * 当你的 vue 版本较老时，禁用还未支持的语法
     */
    'vue/no-unsupported-features': 'off',
    /**
     * 禁止定义在 components 中的组件未使用
     */
    'vue/no-unused-components': 'error',
    /**
     * 禁止属性定义了却未使用
     */
    'vue/no-unused-properties': 'off',
    /**
     * 标签属性必须按规则排序
     * @reason 识别有限制，无法识别在其他组件中使用的情况
     */
    'vue/no-unused-refs': 'off',
    /**
     * 模版中已定义的变量必须使用
     */
    'vue/no-unused-vars': 'error',
    /**
     * 禁止在同一个元素上使用 v-if 和 v-for 指令
     */
    'vue/no-use-v-if-with-v-for': 'error',
    /**
     * 禁止出现没必要的字符串连接
     */
    'no-useless-concat': 'off',
    'vue/no-useless-concat': 'error',
    /**
     * 禁止出现无用的 mustache 字符串
     */
    'vue/no-useless-mustaches': 'error',
    /**
     * 禁止出现无用的 v-bind
     */
    'vue/no-useless-v-bind': 'error',
    /**
     * 禁止有 v-for 属性时又有 key 属性
     */
    'vue/no-v-for-template-key': 'error',
    /**
     * 禁止 v-for 属性的子节点有 key 属性
     */
    'vue/no-v-for-template-key-on-child': 'error',
    /**
     * 禁止使用 v-html
     */
    'vue/no-v-html': 'off',
    /**
     * 禁止给 v-model 属性添加参数
     */
    'vue/no-v-model-argument': 'error',
    /**
     * 禁止在 await 之后调用 watch
     */
    'vue/no-watch-after-await': 'error',
    /**
     * 一个文件必须仅包含一个组件
     */
    'vue/one-component-per-file': 'error',
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
     * 必须使用模版字符串而不是字符串连接
     */
    'prefer-template': 'off',
    'vue/prefer-template': 'off',
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
     * emits 必须为函数
     */
    'vue/require-emit-validator': 'off',
    /**
     * emits 属性必须包含 $emit() 中的值
     */
    'vue/require-explicit-emits': 'error',
    /**
     * 必须导出 expose
     */
    'vue/require-expose': 'off',
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
     * this.$slots.default 必须被当作方法使用
     */
    'vue/require-slots-as-functions': 'error',
    /**
     * transition 内部必须有条件指令
     */
    'vue/require-toggle-inside-transition': 'error',
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
     * emits 中的方法必须有返回值
     */
    'vue/return-in-emits-validator': 'error',
    /**
     * script setup 中定义的变量必须使用
     */
    'vue/script-setup-uses-vars': 'error',
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
     * v-for 中必须用 in 进行遍历
     */
    'vue/v-for-delimiter-style': 'off',
    /**
     * 禁止在 v-on 的事件名使用横杠
     */
    'vue/v-on-event-hyphenation': 'error',
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
     * defineEmits 必须使用合法的语法
     */
    'vue/valid-define-emits': 'off',
    /**
     * defineProps 必须使用合法的语法
     */
    'vue/valid-define-props': 'off',
    /**
     * 禁止调用 Vue.nextTick 或 vm.$nextTick 时不使用 await
     */
    'vue/valid-next-tick': 'error',
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
     * v-is 指令必须合法
     */
    'vue/valid-v-is': 'error',
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
    'vue/valid-v-text': 'error',
  },
};
