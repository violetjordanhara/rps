document.querySelector('#rock').addEventListener('click', ()=>{playRound('rock', computerPlay())})
document.querySelector('#scissors').addEventListener('click', ()=>{playRound('scissors', computerPlay())})
document.querySelector('#paper').addEventListener('click', ()=>{playRound('paper', computerPlay())})


function computerPlay(){
    var outcomes = [
        'rock',
        'scissors',
        'paper'
    ];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}


let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {

    if (computerSelection === playerSelection){
        document.querySelector('#result').innerText = "this round, the computer and you tie"
    }else if (computerSelection == 'scissors' && playerSelection=='paper'){
        document.querySelector('#result').innerText = 'this round, you lose :('
        computerScore++
    }else if (computerSelection=='rock'&& playerSelection =='scissors'){
        document.querySelector('#result').innerText = 'this round, you lose :('
        computerScore++
    } else if(computerSelection == 'paper' &&playerSelection=='rock'){
        document.querySelector('#result').innerText ='this round, you lose :('
        computerScore++
    }else{
        document.querySelector('#result').innerText ='this round, you win :)'
        playerScore++
    }
//keep track of running scores
    document.querySelector('#playerScore').innerText = `currently, your score is ${playerScore}`
    document.querySelector('#computerScore').innerText = `currently, the computer's score is ${computerScore}`

//winning rounds. clear the dom with clear() function, then declare winner


//end creates 'start again' button and temporarily removes rps buttons
// but the reppearance of rps buttons reorders them stylisticall>??


    if (computerScore == 5 && playerScore ==5){
        
        document.querySelector('h3').innerText = "and so, it's a tie all around"
        end()
        
    }else if (playerScore == 5){
        
        document.querySelector('h3').innerText = "and so player, you win :)"
        end()
    }else if(computerScore ==5){
        
        document.querySelector('h3').innerText = 'and so, the computer wins'
        end()
    }

    function toggle_visibility(btn){
        var els = document.getElementsByClassName('btn');
        for (var i = 0; i < els.length; i++){
           var s = els[i].style;
           s.display = s.display === 'none' ? 'inline' : 'none';
        }
     }
     

function end(){
    const btn = document.createElement("button");
    btn.innerText = "start again";
    document.querySelector('#startagain').appendChild(btn);
    btn.setAttribute('id', 'btn')
    document.querySelector('#btn').addEventListener('click', ref)
    toggle_visibility('btn');
}
  
    
  function ref(){
    playerScore = 0
    computerScore = 0
    document.querySelector('#playerScore').innerText = `currently, ur score is ${playerScore}`
    document.querySelector('#computerScore').innerText = `currently, the computer's score is ${computerScore}`
    document.querySelector('#result').innerText = ''
    document.querySelector('h3').innerText = ''
    document.querySelector('#startagain').removeChild(btn)
    toggle_visibility('btn');
    
    }
}
  
 //function game(){
    //let i = 0;
    //do {
    //i += 1;
   // var computerSelection = computerPlay.value;

    //var playerSelection = prompt("rock, paper, or scissors?")
    //playerSelection = playerSelection.toLowerCase();
    
    //return playRound();
    //} while (i < 5);
      //for (let i =5; i<5; i++){
        //var computerSelection = computerPlay();
        //#result.textContent =playRound(playerSelection, computerSelection))      
        
      //}
  //}
