let arr = [-4, 20, 9, -1, -5]

let largestNumber = -Infinity;
let secondLargestNumber = -Infinity;

for(let item of arr){
    if(item > largestNumber){
        secondLargestNumber = largestNumber;
        largestNumber = item;
    }

    if(item > secondLargestNumber && item !== largestNumber){
        secondLargestNumber = item;
    }

}

console.log(secondLargestNumber)