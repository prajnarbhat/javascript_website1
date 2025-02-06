let correctPin="1234"

let btns=document.getElementsByClassName("pinpad-btn")

let pinInput=document.getElementById("pinpad-input")

for(let i=0;i<btns.length;i++){
    let btn=btns.item(i)
    if(btn.id && (btn.id === "submit-btn" || btn.id === "delete-btn"))
        continue;

    btn.addEventListener("click",(e)=>{
        pinInput.value+=e.target.value;
    })
}
let submitBtn = document.getElementById(
    "submit-btn"
);
let delBtn = document.getElementById(
    "delete-btn"
);
let modal =
    document.getElementById("modal");
let result =
    document.getElementById("result");
let closeBtn =
    document.getElementById("close");

submitBtn.addEventListener("click",()=>{
    if(!pinInput ||)
})