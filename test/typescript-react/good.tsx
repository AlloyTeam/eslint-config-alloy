import * as React from 'react';

interface FooProps {
    bar: string;
}

interface FooState {
    baz: number;
}

class Foo extends React.Component<FooProps, FooState> {
    public constructor(props) {
        super(props);
        console.log(this.props.bar);
    }
    public render() {
        return (
            <div
                id="app"
                className="foo"
            />
        );
    }
}

console.log(Foo);
