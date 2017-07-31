module.exports = {
    "extends": [
    	"@alloyteam/eslint-config-standard",
        "plugin:vue/recommended"
    ],

    "plugins": [
        
    ],
    "rules": {
        "no-new": [0], // 用vue的时候，免不了new Vue但是不赋值
        "no-multi-spaces": [2, {
            "exceptions": {
                "VariableDeclarator": true, // 变量声明可以有多空格，来格式化
                "AssignmentExpression": true, // 赋值操作可以有多控制，来格式化
            }
        }],
        "no-debugger": [0],
        "padded-blocks": [0, { "blocks": "never", "switches": "never", "classes": "never" }] // 实际上有时候需要padding来帮助划分代码段
    },
    "globals": {
        
    }
};