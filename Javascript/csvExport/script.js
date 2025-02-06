let api="https://api.github.com/users/";

let fetch=document.createElement("script")

fetch.src =
`https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.0/axios.min.js`;

fetch.integrity =
`ha512-DZqqY3PiOvTP9HkjIWgjO6ouCbq+dxqWoJZ/Q+zPYNHmlnI2dQnbJ5bxAHpAMw+LXRm4D72EIRXzvcHQtE8/VQ==`;

fetch.crossOrigin = "anonymous";

let main=document.getElementById("main")
let inputForm=document.getElementById("userInput")
let inputBox =document.getElementById("inputBox");

const userGetFunction = (name) =>{
    axios(api+name)
        .then((response)=>{
            userCard(response.data)
            repoGetFunction(name);
        })
        .catch((error)=>{
            if(error.response.status == 404){
                errorFunction("No profile with this username")
            }
        }
    )
}
const repoGetFunction = (name) =>{
    axios(api+name+"/repos?sort=created")
    .then((response)=>{
        repoCardFunction(
            response.data);})
    .catch((err) => {
        errorFunction(
            "Problem fetching repos");
    })
}
const userCard = (user) =>{
    let id = user.name || user.login
    let info = user.bio ? `<p>${user.bio}</p>` : "";
    
}