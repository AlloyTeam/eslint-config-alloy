class Foo extends React.Component {
    constructor() {
        this.myRef = React.createRef();
    }
    render() {
        return <div ref={this.myRef} />;
    }
}
