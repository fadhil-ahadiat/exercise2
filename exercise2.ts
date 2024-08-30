// exercise 2

/* 1. write a code to check whether the number is odd or even

solution:
use if-else or condition;
*/

let _number: number = 123; // insert the number

// divide number by 2 to check whether it's odd or even
if (_number % 2 === 0) {
    console.log(`${_number} is even`);
} else {
    console.log(`${_number} is odd`);
}


/* 2. write a code to check whether the number is prime or not

solution:
use if-else;
check if 7 is a prime number;
check if 6 is not a prime number;
*/

const _prime: number = 111;
let _action: string;

if (_prime <= 0) {
    _action = (`${_prime} is not a prime number`);
} else if (_prime % 1 === 0 && _prime % 2 === 0) {
    _action = (`${_prime} is not a prime number`);
} else if (_prime % 3 && _prime % 5 === 0) {
    _action = (`${_prime} is not a prime number`);
} else if (_prime % 7 && _prime % 11 === 0) {
    _action = (`${_prime} is not a prime number`);
} else {
    _action = (`${_prime} is a prime number`);
}
console.log(_action);


/* 3. write a code to find the sum of the numbers 1 to N

solution:
use for loop;
check if the sum of 1 to 5 is 15;
check if the sum of 1 to 3 is 6;
*/

const _n: number = 5;
let _sum: number = 0;
for (let i = 1; i <= _n; i++) {
    _sum += i;
}
console.log(_sum);

/* 4. write a code to find factorial of a number

solution:
use for loop;
check if the factorial of 4 is 24;
check if the factorial of 6 is 720;
*/

let _f: number = 4;
let _factorial: number = 1;
for (let i = 1; i <= _f; i++) {
    _factorial *= i;
}
console.log(_factorial);

/* 5. write a code to print the first N fibonacci numbers

solution:
use for loop;
check if the first 15 fibonacci number is 610;
*/

let _fib: number = 15;
let _fibA: number = 0;
let _fibB: number = 1;
let _sumFib: number;
for (let i = 2; i <= _fib; i++) {
    _sumFib = _fibA + _fibB
    _fibA = _fibB;
    _fibB = _sumFib;
    console.log(_sumFib);
}
_sumFib = _fibB
console.log(_sumFib)