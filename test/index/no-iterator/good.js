let foo = {};
foo[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
console.log([...foo]);
// [1, 2, 3]
