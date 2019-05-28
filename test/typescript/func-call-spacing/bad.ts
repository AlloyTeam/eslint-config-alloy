function createArray1<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray1<string> (3, 'x'); // ['x', 'x', 'x']
