// Reverse an Array (Without Using reverse())
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]


const arr = [1, 2, 3, 4];

let left = 0;
let right = arr.length - 1

// while(left < right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--
// }

let newArr = [];
for(let item  = arr.length-1;item >= 0;item--){
    newArr.push(arr[item])
}


// console.log(arr)
console.log(newArr)
