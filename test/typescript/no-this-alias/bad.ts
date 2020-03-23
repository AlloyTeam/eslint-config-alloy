function foo() {
    const self = this;
    setTimeout(function () {
        self.doWork();
    });
}
