function foo() {
    return (
        <ul>
            {[1, 2, 3].map((value, index) => (
                <li key={index}>{value}</li>
            ))}
        </ul>
    );
}
