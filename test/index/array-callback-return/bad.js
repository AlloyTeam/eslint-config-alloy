// bad 数组的 map 方法的回调函数缺少返回值
let foo = [1, 2, 3].map((num) => {
    console.log(num * num);
});