//we have two arrays
//two add them we need to convert into set and add them
let a1=[10,20,30]
let a2=[30,40,50]

let s=new Set([...a1,...a2])

//convert the set back to array
let a=[...s]

console.log("Merges array",a)