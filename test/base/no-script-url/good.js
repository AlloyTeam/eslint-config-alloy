// good 不使用 javascript:void(0)
let foo = document.createElement('a');
a.href = '';
foo.addEventListener('click', (e) => {
    e.preventDefault();
});