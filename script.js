let boxes =document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame =document.querySelector("#new-game");
let msgContainer =document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=false;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
    turnO=false;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const gameDraw=()=>{
    msg.innerText="Game was Draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
    count=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if(turnO)
        {
            box.innerText="0";

            turnO=false;

            
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(!isWinner &&count===9)
        {
            gameDraw();
        }
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
      
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = ()=>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" &&pos3!="")
        {
        if(pos1===pos2 && pos2===pos3)
        {
            
            showWinner(pos1);
        }
        }
    }
}
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
