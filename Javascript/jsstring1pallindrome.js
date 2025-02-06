const prompt = require("prompt-sync")();
function checkPallindrome(string){
    const len=string.length;
    for(let i=0;i<len/2;i++){
        if(string[i] !== string[len-1-i]){
            return 'It is not a pallindrome'
        }
    }
    return 'It is a pallindrome'
}

const string=prompt("Enter a tsring")
console.log(checkPallindrome(string))