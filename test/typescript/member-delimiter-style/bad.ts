interface Foo2 {
    name: string
    greet(): string
}
interface Bar1 {
    name: string,
    greet(): string,
}
interface Baz1 {
    name: string;
    greet(): string
}
type TypeFoo1 = { name: string, greet(): string }
type TypeBar1 = { name: string; greet(): string; }
