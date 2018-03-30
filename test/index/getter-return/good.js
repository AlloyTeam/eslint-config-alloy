// good getter 有返回值
let user = {
    get name() {
        return 'Alex';
    }
};
class User {
    get name() {
        return this.name;
    }
}