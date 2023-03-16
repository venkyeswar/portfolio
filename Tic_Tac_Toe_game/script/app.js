let playerId=0;
let activePlayer=0;
let count=1;
let playersData=[
    {
        name:'',
        symbol:"X",
    },
    {
        name:'',
        symbol:'O'
    }
]

const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]
let editBtn1=document.getElementById('edit1');
editBtn1.addEventListener('click',editPlayerName);


let editBtn2=document.getElementById('edit2');
editBtn2.addEventListener('click',editPlayerName);

let userInput=document.querySelector('.userInput');
let shadow=document.querySelector('.shadow');
shadow.addEventListener('click',cancelEdit)


let cancelBtn=document.getElementById('reset');
cancelBtn.addEventListener('click',cancelEdit)


let formInfo=document.getElementById('form');
formInfo.addEventListener('submit',takeData);
let errorMsg=document.getElementById('error');

let Player=document.getElementById('PlayerName');

let gameBtn=document.getElementById('startGame');
gameBtn.addEventListener('click',gameStart);
let gameBox=document.getElementById('gameSection');
let gameboard=document.getElementById('game');
let fieldBtns=document.querySelectorAll('#game li')
for (let x of fieldBtns){

    x.addEventListener('click',gameField);
}
let play=document.getElementById('play');
let won=document.getElementById('game-over');