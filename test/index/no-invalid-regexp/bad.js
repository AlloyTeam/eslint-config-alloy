// bad 在 RegExp 构造函数中出现了非法的正则表达式
let reg1 = new RegExp('[');
let reg2 = new RegExp('.', 'z');