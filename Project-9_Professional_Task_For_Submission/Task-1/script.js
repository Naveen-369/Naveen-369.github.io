//Function declaration for the ascending function
ascending=()=>{
    let a=document.getElementById("FNumber").value;
    let b=document.getElementById("SNumber").value;
    let c=document.getElementById("TNumber").value;
    let arr=[a,b,c];
    arr.sort((a,b)=>a-b);
    let ans=document.getElementById("answer");
    ans.innerHTML="Ascending order is: \n"+arr;
}

//Function declaration for the descending function
descending=()=>{
    let a=document.getElementById("FNumber").value;
    let b=document.getElementById("SNumber").value;
    let c=document.getElementById("TNumber").value;
    let arr=[a,b,c];
    arr.sort((a,b)=>a-b);
    arr.reverse();
    let ans=document.getElementById("answer");
    ans.innerHTML="Descending order is: \n"+arr;
}