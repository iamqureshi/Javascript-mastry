const arr = [0,1,0,3,12]
function moveZeros() {
    let slow = 0;

    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== 0) {
            [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
            slow++;
        }
    }

    return arr;
}

console.log(moveZeros())