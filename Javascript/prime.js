const prompt = require("prompt-sync")();
const num=parseInt(prompt("enter a positive number"));

let isPrime=true;

if(num===1){
    console.log("1 is neither prime nor composite");
}
else if(num>1){
    for(let i=2;i<=num/2;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is a prime number`)
    }
    else{
        console.log(`${num} is not a prime number`)
    }

}
else{
    console.log("number is not a prime nymber")
}