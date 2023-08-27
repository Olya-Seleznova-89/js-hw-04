const numbers = [23, 1, 45, 87, 4, 55, 6];
let bigestNumber = numbers[0];


for (const number of numbers) {
    console.log(number);
    if (number > bigestNumber){
        bigestNumber = number;
    }
} 
console.log('Найбільше число масиву:' , bigestNumber);