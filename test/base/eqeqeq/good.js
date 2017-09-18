// bad 禁止使用 == 或 !=
if (foo === 1) {
    console.log('foo is 1');
}

// good 与 null 比较时，允许使用 == 或 !=
if (foo == null) {
    console.log('foo is null or undefined');
}