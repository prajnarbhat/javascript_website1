let showbtn=document.getElementById("showbtn")

let closebtn=document.getElementById("closebtn")

let popup = document.querySelector(".popup");
let subp = document.getElementById("sub-p");

showbtn.addEventListener("click",()=>{
    popup.style.display="block"
    showbtn.style.display="none"
    document.body.style.backgroundColor = "#9EA9B1";
    subp.style.display = "none";
})

//To close the popup
closebtn.addEventListener("click",()=>{
    popup.style.display="none";
    showbtn.style.display="block"
    document.body.style.backgroundColor = "#09dbd450";
})


