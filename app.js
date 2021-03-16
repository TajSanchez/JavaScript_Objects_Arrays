console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];
const arraySum = (numbers) => {
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    
    });
       return sum
    }
    console.log ()

    const arraySum2 = (numbers) => {
        let sum = 0;
        for (let i = 0; i <= numbers.length; i++){
            sum + numbers [i];
        }
        return sum;
    }
console.log(arraySum(numbers));
console.log (arraySum2(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book1 = {
title: "Van Gogh Paintings Dictionary", 
pages: "890",
readCount: 5
}
let book = ("book.info");

console.log(book1)

