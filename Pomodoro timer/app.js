var tPomodoro;
var timerFlag = false;

const Btns = document.querySelectorAll('.timer-button');
const h1 = document.querySelector('.display-time-left');
const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

//Looping through each button and adding event listener to them

Btns.forEach(function(btn){
    btn.addEventListener('click', startCountdown);
});

stopBtn.addEventListener('click', stopTime);

startBtn.addEventListener('click', startTime);

function timer(timer,seconds){
    
    if(!timer){
        clearInterval(tPomodoro);
    }
   
    const now = Date.now();
    var then = now + seconds * 1000;
    displayTimeLeft(seconds);

    tPomodoro = setInterval(()=>{
        var secondsLeft = Math.round((then - Date.now())/ 1000);
        if(secondsLeft < 0){
            clearInterval(tPomodoro);
            return;
        }
       
       
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds/60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    h1.innerHTML = display;
}



function startCountdown(e){
    const seconds = parseInt(e.currentTarget.dataset.time);
    timer(timerFlag,seconds);
    
}



function stopTime(){
    clearInterval(tPomodoro);
    
}

function startTime(){
    
     timerFlag = true;

     timer(timerFlag,tPomodoro);
     console.log(tPomodoro);
}
