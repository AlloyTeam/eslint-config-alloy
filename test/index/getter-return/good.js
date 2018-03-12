// good getter 有返回值
let user = {
    get name() {
        return 'Alex';
    }
};
Object.defineProperty(user, 'age', {
    get: function () {
        return 18;
    }
});
class User {
    get name() {
        return this.name;
    }
}