// good 函数名称后禁止有空格
function foo() {
    console.log('foo');
}

// good 箭头函数的箭头前后必须有空格
let bar = () => {
    console.log('bar');
};

// good 匿名函数的 function 后面不限制有没有空格
bar = function () {
};
bar = function() {
};
