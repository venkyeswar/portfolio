function editPlayerName(event){
    playerId=+event.target.dataset.player; 
    shadow.style.display='block';
    userInput.style.display='block';
}
function cancelEdit(){
    shadow.style.display='none';
    userInput.style.display='none';
    Player.style.background='white';
    errorMsg.style.display='none';
    let Name=document.getElementById('PlayerName');
    Name.value="";

}
function takeData(event){
    event.preventDefault();
    let form=new FormData(event.target);
    let name=form.get('playerName').trim();
    if (!name){
        errorMsg.style.display='block';
        Player.style.background='orange';
        return;
    }
    let NameofPlayer=document.getElementById('player-'+playerId+'-data');
    NameofPlayer.textContent=name;
    playersData[playerId-1].name=name;
    console.log(playersData[playerId-1].name=name);

    cancelEdit();

    
}