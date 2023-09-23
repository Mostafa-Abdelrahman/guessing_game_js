let randomNumber=Math.round(Math.random()*100);
const guesses=document.querySelector('.guesses');
let lastResult=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const guesSubmit=document.querySelector('.guessSubmit');
const guesField=document.querySelector('.guessField');
let guesCount=1;
let resetButton;

function checkGuess(){
const userGuess = Number(guesField.value);
    if(guesCount===1){
        guesses.textContent="previous guesses: ";
    }else if(guesCount>10){
        guesses.textContent="you lost !! try better next time ."
        guesses.style.color='red';
        setGameOver();
    }
    guesses.textContent+=userGuess + " ";
    if(userGuess===randomNumber){
        lastResult.textContent=`congratulation ! you get it right..`;
        lastResult.style.color='green';
        lowOrHigh.textContent='';
        setGameOver();
    }else{
        lastResult.textContent='Wrong !';
        lastResult.style.color='red';
        if(userGuess<randomNumber){
            lowOrHigh.textContent="last guess is low";
        }else if(userGuess>randomNumber){
            lowOrHigh.textContent="last guess is high";
        }
    }
    guesCount++;
    guesField.value='';
    guesField.focus();
}
guesSubmit.addEventListener('click',checkGuess);
function setGameOver(){
    guesField.disabled=true;
    guesSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent="Strat New Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}

function resetGame(){
    guesCount=1;
    lastResult.textContent='';
    guesses.textContent='';
    lowOrHigh.textContent='';


    resetButton.parentNode.removeChild(resetButton);
    guesField.disabled=false;
    guesSubmit.disabled=false;
    guesField.value='';
    guesField.focus();
    lastResult.style.backgroundColor = 'white';
    randomNumber = Math.floor(Math.random() * 100) + 1;
    

}


