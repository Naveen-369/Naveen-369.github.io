document.addEventListener("DOMContentLoaded",()=>{
    let ginger=document.getElementById("clicker");
    if(ginger){
        ginger.addEventListener("click",()=>{
            let r=math.floor(math.random*(255-1))+1;
            let g=math.floor(math.random*(255-1))+1;
            let b=math.floor(math.random*(255-1))+1;
            document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
        })
    }

})