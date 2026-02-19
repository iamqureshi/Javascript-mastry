const arr = [2,2,1,2,3,2,2];
const freq = {};
const n = arr.length

for(let item of arr){
    freq[item] = (freq[item] || 0) + 1;
    if(freq[item] > n/2){
        console.log(item, "majority value")
        break;
    }
}
console.log(freq)