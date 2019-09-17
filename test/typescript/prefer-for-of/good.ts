const arr2 = [1, 2, 3];

for (const x of arr2) {
    console.log(x);
}

for (let i = 0; i < arr2.length; i++) {
    // i is used to write to arr, so for-of could not be used.
    arr2[i] = 0;
}

for (let i = 0; i < arr2.length; i++) {
    // i is used independent of arr, so for-of could not be used.
    console.log(i, arr2[i]);
}
