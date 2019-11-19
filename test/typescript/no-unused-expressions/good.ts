'use strict';
declare const foo2: any;
declare const bar2: any;
declare const baz2: any;
foo2 && bar2();
foo2 || bar2();
foo2 ? bar2() : baz2();
foo2`bar2`;
