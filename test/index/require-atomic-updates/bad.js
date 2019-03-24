async function foo() {
    result += await somethingElse;
    result = result + await somethingElse;
}
