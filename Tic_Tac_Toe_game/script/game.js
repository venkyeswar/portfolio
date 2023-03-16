function newGame(){
    activePlayer=0;
count=1;
won.firstElementChild.innerHTML='YOU WON ,<span>PLAYER Name</span>';
won.style.display='none';

let x=0;
for (let i=0 ; i<3 ; i++){
    for (let j = 0 ; j < 3; j++){
        gameData[i][j]=0;
        const list2=gameboard.children[x];
        list2.textContent='';
       list2.classList.remove('clicked');
        x++;
    }
}

}




function gameStart(){
    if (playersData[0].name=='' && playersData[1].name==''){
       alert("Please enter Player Names")
        return;
    }
    newGame();
    play.textContent=playersData[activePlayer].name;
    gameBox.style.display='block';
   
    

}
function clickEvents(){
    if(activePlayer==0){
        play.textContent=playersData[1].name;
        activePlayer=1;
    }
    else{
       
        activePlayer=0;
    }
    play.textContent=playersData[activePlayer].name;
}
function gameField(event){
    const selectedcolumn=event.target.dataset.col-1;
    const selectedrow=event.target.dataset.row-1;
    if(gameData[selectedrow][selectedcolumn]>0){
        alert("please select the empty box")
        return;
    }
    event.target.textContent=playersData[activePlayer].symbol;
    event.target.classList.add('clicked');
    gameData[selectedrow][selectedcolumn]=activePlayer+1;
    console.log(gameData)
   const Id=gameOver();
   if(Id!== 0){
    wonMatch(Id);
   }
   console.log(game);
   count++;
   clickEvents();
   
}

function gameOver(){
    for(let i = 0 ;i < 3; i++){
    if(
        gameData[i][0]> 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
    ){
        return gameData[i][0];
    }
    }
    for(let i=0 ;i<3;i++){
    if(
        gameData[0][i]>0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
    ){
        return gameData[0][i];
    }}

    if(
        gameData[0][0]>0 && 
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ){
        return gameData[0][0];
    }

    if(
        gameData[2][0]>0 && 
        gameData[2][0]=== gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ){
        return gameData[2][0];
    }
    if(count===9){
        return -1;
    }
    return 0;
    }

function wonMatch(Id){
    if (Id>0){
        won.style.display='block';
        won.firstElementChild.firstElementChild.textContent=playersData[Id-1].name.toUpperCase();
    }
    else{
        won.firstElementChild.textContent='it\'s A Draw ! ';
        won.style.display='block';
    }
}