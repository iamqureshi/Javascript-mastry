const arr =[1,2,3,4,5];

let left = 0;
let right = arr.length - 1;

// while(left < right){
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--
// }


function getRevers(){
    while(left < right){
        (arr[left], arr[right]) = (arr[right], arr[left]);
        left++;
        right--
    }

    return arr;
}

// console.log(arr)
console.log(getRevers())