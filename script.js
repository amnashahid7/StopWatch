let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false;

function start(){
    if(timer==true){
        return;
    }
    else{
        timer=true;
    stopwatch();
    }
    
}
function stop(){
    timer=false;
    
}
function reset(){
    timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerText="00";
    document.getElementById("min").innerText="00";
    document.getElementById("sec").innerText="00";
    document.getElementById("count").innerText="00";
    
}



function stopwatch(){
    if(timer==true){
     count= count+1;

    if(count==99){
        sec= sec+1;
        count=0;
    }

        if(sec==59){
            min= min+1;
            sec=0;
            count=0;
        }

            if(min==59){
                hr= hr+1;
                min=0;
                sec=0;
                count=0;
            }
        
    
    
    
    let hrString=hr;
    let minString=min;
    let secString=sec;
    let countString= count;

    if(hr<10){
            hrString="0"+hr;
    }
    if(min<10){
            minString="0"+min;
    }
    if(sec<10){
            secString="0"+sec;
    }
    if(count<10){
            countString="0"+count;
    }
        document.getElementById("hr").innerHTML= hrString;
        document.getElementById("min").innerHTML= minString;
        document.getElementById("sec").innerHTML= secString;
        document.getElementById("count").innerHTML= countString;

        setTimeout("stopwatch()",10);
    }
}