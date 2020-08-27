const user = {
  get name() {
    return 'Alex';
  },
};
class User {
  get name() {
    return this.name;
  }
}
