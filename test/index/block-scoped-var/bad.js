// bad if 中定义的 var 在外面被使用了
if (foo) {
    var bar = 1;
}
console.log(bar);