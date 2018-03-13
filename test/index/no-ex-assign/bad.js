// bad catch 的第一个参数 error 被重新赋值了
try {
    // do something
} catch (e) {
    e = 10;
}