DisplayTime=()=>{
    let hrs=parseInt(document.getElementById("Hours").textContent,10);
    let mins=parseInt(document.getElementById("Minutes").textContent,10);
    let sec=parseInt(document.getElementById("Seconds").textContent,10);
    sec++;
    if(sec==60){
        sec=0;
        mins++;
        if(mins==60){
            mins=0;
            hrs++;
            if(hrs==24){
                hrs=0;
            }
        }
    }
    document.getElementById("Hours").innerHTML=padZero(hrs);
    document.getElementById("Minutes").innerHTML=padZero(mins);
    document.getElementById("Seconds").innerHTML=padZero(sec);

}
padZero=(num)=>(num<10)?"0"+num:num;
let ititi=setInterval(DisplayTime,100);
//Declaration of the button
document.addEventListener("DOMContentLoaded",()=>{
    let gg=document.getElementById("startStop");
    gg.addEventListener("click",()=>{
        if(gg.textContent=="Start"){
            ititi=setInterval(DisplayTime,100);
            gg.textContent="Stop";
        }
        else{
            clearInterval(ititi);
            gg.textContent="Start";
        }
    })
})
document.addEventListener("DOMContentLoaded",()=>{
    let gg=document.getElementById("reset");
    gg.addEventListener("click",()=>{
        clearInterval(ititi);
        document.getElementById("Hours").innerHTML="00";
        document.getElementById("Minutes").innerHTML="00";
        document.getElementById("Seconds").innerHTML="00";
        document.getElementById("startStop").textContent="Start";
    })
})