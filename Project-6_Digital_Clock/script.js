DisplayTime=()=>{
    let dd=new Date();
    let hrs=dd.getHours();
    let mins=dd.getMinutes();
    let secs=dd.getSeconds();
    if(hrs>12){
        hrs-=12;
        document.getElementById("ampm").innerHTML="PM";
    }
    document.getElementById("Hours").innerHTML=padZero(hrs);
    document.getElementById("Minutes").innerHTML=padZero(mins);
    document.getElementById("Seconds").innerHTML=padZero(secs);
}
padZero=(num)=>(num<10)?"0"+num:num;
setInterval(DisplayTime,500);