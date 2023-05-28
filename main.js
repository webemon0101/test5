var startButton = document.getElementsByClassName('startButton')[0];
var displayElm = document.getElementsByClassName('display')[0];
var timer = null;
startButton.addEventListener('click', function(){
    if(timer===null){
        navigator.vibrate(200); 
        var seconds = 0;
        timer = setInterval(function(){
            seconds++;
            var under=seconds%100;
            var underp;
            if (under==0)underp='00';
            else if(under>=1&&under<=9)underp='0'+under;
            else underp=under;
            displayElm.innerHTML=parseInt(seconds/100)+'.'+underp;
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