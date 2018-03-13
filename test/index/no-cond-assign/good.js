// good 在测试表达式中使用 ===
if (foo === 0) {
    // do something
}

// good 使用括号将测试表达式中的赋值语句包起来了
if (bar === (foo = 0)) {
    // do something
}