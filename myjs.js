

window.onload = function(){
    timeleft = 4

    function countdown(){
        setInterval(function(){
            if(timeleft <=0){
    document.getElementById(levideo).style.display = none;
    document.getElementById(lebody).style.display = block;
            }
            timeleft - 1
        })
    
    }
}