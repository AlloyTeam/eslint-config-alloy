// bad 禁止将常量作为 if 或三元表达式的测试条件
if (true) {
    console.log('true');
}

const foo = 0 ? 'bar' : 'baz';
