// 分号
// wrong end at line 10
var x = 1

do {
	x++
} while (x < 10)

function draw() {
	return 1
}

// correct
var x = 1;

do {
	x++;
} while (x < 10);

function draw() {
	return 1;
}