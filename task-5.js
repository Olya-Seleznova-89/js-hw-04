const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

const array3 = array1.concat(array2);
let total = 0;

console.log(array3);

for (const number of array3) {
    total += number;
} 
console.log(total);