const prompt = require("prompt-sync")();
let a=prompt("enter first number");
let b=prompt("enter a scecond number");

let temp;

temp=a;
a=b;
b=temp;

console.log(`value of a and b:${a}`);
console.log(`value of b:${b}`)