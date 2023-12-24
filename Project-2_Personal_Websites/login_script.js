Auth=()=>{
    let a=document.getElementById("login_UserName").value;
    let b=document.getElementById("login_Password").value;
    if(a=="Naveen Kumar" && b=="Nk123456789"){
        window.location.href = "indexHome.html";
    }
    else{
        location.reload();
    }
}