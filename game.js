let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new-game");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;
const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("button clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
           
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner()
    })
})
const doDisable=()=>{
    for(let box of boxes){
          box.disabled=true;
    }
}
const doEnable=()=>{
    for(let box of boxes){
          box.disabled=false;
          box.innerText="";
    }
}

const showWinner=(winner)=>{
     msg.innerText=`Congrats! You Won ${winner}`;
    msgcontainer.classList.remove("hide");
    doDisable();
}
const showmessage=()=>{
    msg.innerText=`Nobody won`;
   msgcontainer.classList.remove("hide");
   doDisable();
}

let flag=true;
checkwinner=()=>{
    for(let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
            let pos1=boxes[pattern[0]].innerText;
            let pos2= boxes[pattern[1]].innerText;
            let pos3= boxes[pattern[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2&&pos2===pos3){
                    flag=false;
                      console.log("winner");
                      showWinner(pos1);
                } 
            }
    }
    
}

const resetfun=()=>{
    turnO=true;
    doEnable();
    msgcontainer.classList.add("hide");
}
newgame.addEventListener("click",resetfun);
reset.addEventListener("click",resetfun);