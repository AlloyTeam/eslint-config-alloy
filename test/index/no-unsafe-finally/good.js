// good finally 中不使用 return, throw, break 或 continue
function foo() {
    try {
        return 1;
    } finally {
        console.log(2);
    }
}
