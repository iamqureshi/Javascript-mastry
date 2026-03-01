// Pair sum
const arr = [1,2,3,4,6];
let target = 6;

let left = 0;
let right = arr.length - 1;

while(left < right){
    let sum = arr[left] + arr[right];

    if(sum === target){
        console.log("Success", target, sum);
        return
    }

    if(sum > target){
        right--
    }else{
        left++
    }
}