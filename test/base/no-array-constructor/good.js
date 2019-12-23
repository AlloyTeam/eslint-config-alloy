const foo = [0, 1, 2];
Array(3); // [empty × 3]
new Array(3); // [empty × 3]
Array(3).fill('foo'); // ["foo", "foo", "foo"]
new Array(3).fill('foo'); // ["foo", "foo", "foo"]
