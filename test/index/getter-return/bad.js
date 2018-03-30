// bad getter 没有返回值，或返回空
let user = {
    get name() {
        // 无返回值
    }
};
class User {
    get name() {
        // 返回空
        return;
    }
}