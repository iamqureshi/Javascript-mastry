const arr = [1,1,2,2,3]; //remove duplicates
let slow = 0;

for(let item = 1;item<arr.length;item++){
    if(arr[item] !== arr[slow]){
        slow++;
        arr[slow] = arr[item]
    }
}

console.log(arr.slice(0, slow+1))