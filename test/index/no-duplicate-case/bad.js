// bad switch 语句中出现了重复的测试表达式的 case
switch (foo) {
    case 1: break;
    case 2: break;
    case 1: break;
}