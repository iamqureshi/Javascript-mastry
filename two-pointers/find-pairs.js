// Given sorted array, find if pair exists with target.
// Example:
// [1,2,3,4,6], target = 6
// Answer: (2,4)

// const arr = [1, 2, 3, 4, 6];

const arr = [10, 20, 30, 40, 50];
let target = 90;
let left = 0;
let right = arr.length - 1;

function root() {
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(root());
