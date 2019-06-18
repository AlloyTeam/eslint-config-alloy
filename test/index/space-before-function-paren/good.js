function foo() {
    console.log('foo');
}

let bar = () => {
    console.log('bar');
};

bar = function () {
};
bar = function() {
};
