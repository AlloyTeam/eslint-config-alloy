// 空行
// wrong end at line 19
var v1 = 1, v2 = 2;

function blank() {

    return 2;
}

if (true) {

    var v3 = 4;
} else {

    var v4 = 4;
}

function test()
{
    var v5 = 5;
}

// correct
var v3 = 3,
	v4 = 4;

function noblank() {
    return 2;
}

var cond;

if (cond) {
    var v6 = 6;
} else {
    var v7 = 7;
}
