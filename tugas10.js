var data = 0;

for (var i = 1; i <= 55; i++) {
    if (data <= 55 && data !== 0) {
        console.log(data);
        data += i;
    } else if (data === 0) {
        data += i;
    }
}