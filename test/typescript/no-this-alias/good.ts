function foo() {
    const { bar } = this;
    setTimeout(() => {
        this.doWork();
    });
}
