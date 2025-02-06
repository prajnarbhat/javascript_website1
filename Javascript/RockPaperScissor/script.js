const game = () =>{
    let playScore
    let computerscore;
    let moves;


const playGame = () =>{
    const rockBtn=document.getElementById("rock")
    const paperBtn=document.getElementById("paper")
    const scissorBtn=document.getElementById("scissor")

    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors']

    playerOptions.forEach(option=>{
        option.addEventListener('click',function(){
            const moveLeft=document.querySelector('.moveleft');
            moves++;
            moveLeft.innerText=`Move Left:${10-moves}`

            const choiceNumber=Math.floor(Math.random()*3)
            const computerChoice=computerOptions[choiceNumber];

            winner(this.innerText,computerChoice)

            if(moves == 10){
                gameOver(playerOptions,movesLeft)
            }


        })
    })
}
const winner = (player,computer) =>{
    
}
}