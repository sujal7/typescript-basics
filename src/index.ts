// 1. Type Annotations
let num: number = 10;
// num = 'a'; // Error

let str: string = 'Hello World';

// 2. Interface
interface User {
  firstName: string;
  lastName: string;
  age?: number;
  isRetired?: boolean;
}

const userData: User = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
};

console.log(userData);

// 3. Custom type
type fontStyle = 'bold' | 'italic' | 'underline';

const font: fontStyle = 'bold';
// const fontNew: fontStyle = 'oblique'; // Error

// 4. Any type
let data: any = 10;
data = 'a';
data = true;

// 5. Function
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(1, '2')); // Error
console.log(add(1, 2).toFixed(2)); // Also suggests method according to return type

// 6. Check transpiled async function
async function hello() {
  return 'Hello World';
}

// 7. Using DOM
const url = new URL('https://www.google.com');

// Debugging
let age: number = 20;

let canVote: boolean;

if (age >= 18) {
  canVote = true;
} else {
  canVote = false;
}

if (canVote) {
  console.log('You can vote');
} else {
  console.log('You can not vote');
}
