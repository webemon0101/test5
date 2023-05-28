var startButton = document.getElementsByClassName('startButton')[0];
var displayElm = document.getElementsByClassName('display')[0];
var timer = null;
startButton.addEventListener('click', function(){
    if(timer===null){
        var seconds = 0;
        timer = setInterval(function(){
            seconds++;
            displayElm.innerHTML=parseInt(seconds/100)+'.'+seconds%100;
        },10);
    }
    
});

var stopButton = document.getElementsByClassName('stopButton')[0];
stopButton.addEventListener('click', function(){
    if(timer!==null){
        clearInterval(timer);
        timer=null;
    }
})