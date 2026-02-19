const arr = [5, 8, 1, 3, -9, 2];

let max = -Infinity;
let min = Infinity;

for(let item of arr){
    if(item > max){
        max = item;
    }

    if(item < min){
        min = item;
    }
}


console.log(max, min)
