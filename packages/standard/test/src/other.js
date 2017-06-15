// 其它
// wrong end at line 5
var data;

if (data === undefined) {
    data = 1;
}

// correct
if (typeof data === 'undefined') {
    data = 1;
}