const arr = [1,1,2,3,3,3];
const freq = {};

for(let item of arr){
    // freq[item] = (freq[item] || 0) + 1;

    if(freq[item]){
        freq[item]++
    }else{
        freq[item] = 1;
    }
}

console.log(freq)