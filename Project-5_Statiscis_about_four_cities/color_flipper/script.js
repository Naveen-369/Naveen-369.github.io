document.addEventListener("DOMContentLoaded",()=>{
    let ginger=document.getElementById("clicker");
    if(ginger){
        ginger.addEventListener("click",()=>{
            console.log("clicked");
            let gg=document.getElementById("sum");
            let r=Math.floor(Math.random()*(255-1))+1;
            let g=Math.floor(Math.random()*(255-1))+1;
            let b=Math.floor(Math.random()*(255-1))+1;
            document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
            gg.textContent=`R=${r} G=${g} B=${b}`
        })
    }

})