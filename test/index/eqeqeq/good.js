// good 使用了 ===
if (foo === 1) {
    console.log('foo is 1');
}

// good 与 null 比较时，可以使用 == 或 !=
if (foo == null) {
    console.log('foo is null or undefined');
}