import { useRef, useEffect } from 'react';

function Foo() {
    const foo = useRef(null);
    useEffect(() => {
        console.log(foo);
    });
    return <div ref={foo} />;
}
