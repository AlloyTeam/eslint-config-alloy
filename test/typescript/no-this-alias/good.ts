function foo() {
    setTimeout(() => {
        this.doWork();
    });
}
