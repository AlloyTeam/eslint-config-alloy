/* eslint typescript/adjacent-overload-signatures: error */
// good 函数有重载时，必须将重载成员分组在一起
interface Foo {
    foo(s: string): void;
    foo(n: number): void;
    foo(sn: string | number): void;
    bar(): void;
}
