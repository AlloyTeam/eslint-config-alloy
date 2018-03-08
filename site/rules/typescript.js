/**
 * AlloyTeam ESLint 规则 - TypeScript
 *
 * 包含所有 ESLint 规则，以及所有 eslint-plugin-typescript 规则
 * 使用 typescript-eslint-parser 作为解析器
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */

module.exports = {
    extends: [
        './index.js'
    ],
    parser: 'typescript-eslint-parser',
    plugins: [
        'typescript'
    ],
    rules: {
        //
        //
        // 覆盖掉 ESLint 的规则
        //
        // 禁止使用未定义的变量
        // @off 接口定义会报错
        'no-undef': 'off',
        // 注释的斜线或 * 后必须有空格
        // @off 三斜线注释会报错
        'spaced-comment': 'off',



        //
        //
        // eslint-plugin-typescript 的规则
        //
        // 函数有重载时，必须将重载成员分组在一起
        'typescript/adjacent-overload-signatures': 'error',
        // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
        'typescript/class-name-casing': 'error',
        // 必须手动指定类的属性和方法的可访问性（private 或 public）
        // @off 太严格了
        'typescript/explicit-member-accessibility': 'off',
        // 接口必须以 I 开头
        // @off 没必要限制
        'typescript/interface-name-prefix': 'off',
        // 接口和类型字面量中每一行都必须以分号结尾
        'typescript/member-delimiter-style': 'error',
        // 私有变量命名必须以下划线开头
        // @off 没必要限制
        'typescript/menber-naming': 'off',
        // 属性和方法必须按照排序规则排序
        'typescript/member-ordering': 'error',
        // 必须使用 as 进行类型断言
        // @off 没必要限制，在 React 项目中需要限制
        'typescript/no-angle-bracket-type-assertion': 'off',
        // 禁止使用 Array 构造函数来初始化数组，除非指定了泛型，或传入的是单个数字
        // 开启，可以帮助发现错误
        'typescript/no-array-constructor': 'error',
        // 禁止使用空接口
        // @off 没必要限制
        'typescript/no-empty-interface': 'off',
        // 禁止使用 any
        // @off 太严格了
        'typescript/no-explicit-any': 'off',
        // 禁止使用 namespace 和 module
        // 用 namespace 或 module 来定义模块是以前的用法，现在已经有了 import 和 export
        'typescript/no-namespace': 'error',
        // 禁止在给构造函数的参数添加修饰符
        // @off 没必要限制
        'typescript/no-parameter-properties': 'off',
        // 禁止使用三斜线注释
        // @off 没必要限制
        'typescript/no-triple-slash-reference': 'off',
        // 限制 type 的使用
        // @off 没必要限制
        'typescript/no-type-alias': 'off',
        // 定义过的变量必须使用
        // eslint 原生的 no-unused-vars 无法使用，需要使用 typescript/no-unused-vars
        'typescript/no-unused-vars': 'error',
        // 变量必须先定义后使用
        // @off eslint 原生已支持 no-use-before-define
        'typescript/no-use-before-define': 'off',
        // 使用 namespace 代替 module
        // @off typescirpt/no-namespace 已经禁用了 namespace 和 module
        'typescript/prefer-namespace-keyword': 'off',
        // 类型定义的冒号前后是否需要空格
        // 默认冒号前必须没有空格，冒号后必须有空格
        'typescript/type-annotation-spacing': 'error'
    }
};