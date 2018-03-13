// bad 在 RegExp 构造函数中出现了非法的正则表达式
let reg = new RegExp('[');
reg = new RegExp('.', 'z');