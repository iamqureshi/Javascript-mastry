function secondLargest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
        return null;
    }

    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (typeof num !== "number") continue;

        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}

console.log(secondLargest([10, 50, 8, -20, -15]));
