const prompt = require("prompt-sync")();

let hcf=1;
let n1=parseInt(prompt("enter first number"));
let n2=parseInt(prompt("enter a second number"))

for(let i=1;i<n1 && i<n2;i++){
    if(n1%i==0 && n2%i==0){
        hcf=i;
    }
}
console.log(hcf)