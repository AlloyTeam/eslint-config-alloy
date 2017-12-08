// good 在函数中使用 this
function foo() {
    console.log(this.x);
}
foo.call({ x: 1 });