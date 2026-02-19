const arr = [1,2,4,4,4,4,2];
const freq = new Map();
const duplicates = [];

for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}

for (let [key, value] of freq) {
    if (value > 1) duplicates.push(key);
}

console.log(duplicates);
