class Foo extends React.Component {
    componentDidMount() {
        const root = findDOMNode(this);
    }
    render() {
        return <div />;
    }
}
