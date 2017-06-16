// 其它
// wrong end at line 25
var data;

if (data === undefined) {
    data = 1;
} else {
	data = 2;
}

function foo()
{
	return true;
}

if (foo)
{
	data = 1;
}

try
{
	data = 1;
} catch(e)
{
	data = 2;
}

// correct
if (typeof data === 'undefined') {
    data = 1;
}
else {
	data = 2;
}

try {
	data = 1;
}
catch (e) {
	data = 2;
}
