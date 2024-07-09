let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //playerX, playerO

let arr = ["apple","banana","litchi"];

//2D Array
let arr2 =[["apple","litchi"], ["chilli","mushroom"],
          ["pants","shirts"]];

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]; 
//FOR NEW GAME
const resetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}


boxes.forEach((box) =>  {
  box.addEventListener("click", () => {
   console.log("box was clicked"); 
   if (turnO) { //PlayerO
    box.innerText ="O";
    turnO = false;
   } else {//PlayerX
   box.innerText ="X";
   turnO = true;
   }
   box.disabled = true;//ek baar kuch print hoi jaye //toh voh dubara change na hoi saka
  
   checkWinner();
  })  
});

// yaha pai hum disable ess liya kar raha hai kyuki agar ek winner nikal jaye toh play karte karte koi dusra winner naa nikal aaye
const disableBoxes = ()  =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}
//FOR NEW GAME
const enableBoxes = ()  =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
}


const showWinner =(Winner) => {
    msg.innerText = `Congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
       //);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


    if  (pos1Val !="" && pos2Val !="" && 
        pos3Val !=""){
    if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winers",pos1Val);
        showWinner(pos1Val);
    }        
    }   
}
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

