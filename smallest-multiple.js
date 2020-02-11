//solution 1
function smallestCommons(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);

    let found = false;

    for (let i = max; found === false; i++) {
        let range = [];
        for (let y = min; y <= max; y++) {
            range.push(y);
        }
        let divided = range.every(digit => {
            return i % digit === 0;
        });
        if (divided) {
            found = true;
            return i;
    }
}
}
smallestCommons([2, 9]);

//solution 2
function smallestCommons(arr) {
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    let range = [];
    for (let i = min; i <= max; i++)
        range.push(i);
    let mult = range.reduce((total,num) => total*=num);

    for (let i = max; i <= mult; i++) {
        if (range.every(num => i % num === 0)) return i;
    }
}
smallestCommons([2, 9]);
