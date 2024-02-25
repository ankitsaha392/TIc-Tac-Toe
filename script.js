let music = new Audio("./tic tac toe/music.mp3");
let audioTurn = new Audio("./tic tac toe/ting.mp3");
let gameOver = new Audio("music.mp3");
let turn = "X";
let isgameover = false;
let linePosition = {
    translateX: 0,
    translateY: 0,
    rotate: 0
};
document.querySelector(".line").style.width = "0";

// Function to Change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

// Function to check Win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2, 15, -5, 90],
        [3, 4, 5, 15, 5, 90],
        [6, 7, 8, 5, 15, 90],
        [0, 3, 6, 5, 5, 0],
        [1, 4, 7, 15, 5, 0], 
        [2, 5, 8, 25, 5, 0],
        [0, 4, 8, 15, 5, 135],
        [2, 4, 6, 15, 5, 45],
    ];
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && (boxText[e[2]].innerText === boxText[e[0]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxText[e[0]].innerText + " WON";
            isgameover = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            linePosition.translateX=e[3];
            linePosition.translateY=e[4];
            linePosition.rotate=e[5];
            document.querySelector(".line").style.width = "0.5vw";
            document.querySelector(".line").style.transform = `translate(${linePosition.translateX}vw, ${linePosition.translateY}vw) rotate(${linePosition.rotate}deg)`;
        }
    });
};
//check draw
const checkDraw = () => {
    let boxText = document.getElementsByClassName('boxText');
    for (let i = 0; i < boxText.length; i++) {
        if (boxText[i].innerText === '') {
            return false; // There are empty boxes, so it's not a draw
        }
    }
    return true; // All boxes are filled, it's a draw
};

// Game Logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }else{
                isgameover=true;
            }
            if(checkDraw()){
                document.getElementsByClassName("info")[0].innerText="It's a Draw";
                isgameover=true;
                resetGame();
            }
        }
    });
});
});

let reset=document.getElementById("reset");
    reset.addEventListener('click', ()=>{
    let boxTexts=document.querySelectorAll('.boxText');
    Array.from(boxTexts).forEach(element =>{
        element.innerText="";
    });
    turn ="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    
    document.querySelector(".line").style.width = "0";
});

function resetGame() {
    let boxTexts=document.querySelectorAll('.boxText');
        Array.from(boxTexts).forEach(element =>{
            element.innerText="";
    });
    
    turn ="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn for "+turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    
    document.querySelector(".line").style.width = "0";
}
