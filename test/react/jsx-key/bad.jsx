function foo() {
    return (
        <ul>
            {[1, 2, 3].map((value) => (
                <li>{value}</li>
            ))}
        </ul>
    );
}
