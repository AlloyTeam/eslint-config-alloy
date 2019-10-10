class Foo {
    componentDidMount() {
        console.log(this.refs.foo);
    }
    render() {
        return <div ref="foo" />;
    }
}
