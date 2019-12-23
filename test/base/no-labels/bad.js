loop:
    for (let i = 0; i < 5; i++) {
        if (i === 1) {
            continue loop;
        }
        console.log(i);
    }
// 0 2 3 4
