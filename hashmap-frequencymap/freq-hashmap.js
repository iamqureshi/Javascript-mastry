const arr = [1,1,2,3,3,3];
const freq =new Map();

for(let item of arr){
    freq.set(item, (freq.get(item) || 0) + 1)
}

console.log(freq)