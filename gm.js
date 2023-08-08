var randomNumber=Math.floor(Math.random()*100)+1;
var attempt=0;

document.getElementById('btn').addEventListener('click',function(){
    var guess=parseInt(document.getElementById('guessInput').value);
    attempt++;
    if(guess===randomNumber){
      displayMessage("congratulation your guess is corect");
      document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNumber){
   displayMessage("Too LOW! try a higher Number");
    
}
else{
    displayMessage("Too high! try a lower number");
}
});
function displayMessage(message){
    document.getElementById('msg').textContent=message;
}