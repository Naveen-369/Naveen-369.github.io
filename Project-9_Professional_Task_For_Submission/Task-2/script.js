//Function declaration for the ascending function
ascending=()=>{
    let a=document.getElementById("FNumber").value;
    let b=document.getElementById("SNumber").value;
    let c=document.getElementById("TNumber").value;
    let arr=[a,b,c];
    arr.sort((a,b)=>a-b);
    let ans=document.getElementById("Answer_For_1.Question");
    ans.innerHTML="Ascending order is: "+arr;
}

//Function declaration for the descending function
descending=()=>{
    let a=document.getElementById("FNumber").value;
    let b=document.getElementById("SNumber").value;
    let c=document.getElementById("TNumber").value;
    let arr=[a,b,c];
    arr.sort((a,b)=>a-b);
    arr.reverse();
    let ans=document.getElementById("Answer_For_1.Question");
    ans.innerHTML="Descending order is: \n"+arr;
}

//Function declaration for finding wheater the number is odd or even function
OddorEven=()=>{
    let num=document.getElementById("CheckNumber").value;
    let ans= (num%2==1) ? "Odd" : "Even";
    let result=document.getElementById("Answer_For_2.Question");
    result.innerHTML=`The Given number is found to be an ${ans} Number . `; 
}

//Function declaration for authenticatiuon of the driver's lisence based on the speed given as input
Authenticat_Lisence=()=>{
    let speed=document.getElementById("Speed").value;
    let result=document.getElementById("Answer_For_3.Question");

    if(speed<=70){
        result.innerHTML="Good Safe Driving";
    }
    else{
        let Penalty_points=Math.floor((speed-70)/5);
        if(Penalty_points>10){
            result.innerHTML="License Suspended";
        }
        else{
            result.innerHTML=`Speed limit crossed by ${Penalty_points} Penalty Point${(Penalty_points>1)?"s.":"."}`;
        }
    }
}