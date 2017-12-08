// good 不使用 ~ 等难以理解的运算符
let b2 = foo.indexOf('.') !== -1;
let n = Number(foo);
let n2 = Number(foo);
let s = String(foo);
foo = String(foo);

// good 可以使用 !!
let b = !!foo;