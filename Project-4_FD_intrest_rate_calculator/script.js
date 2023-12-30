Calculate = () => {
    let va = document.getElementById("inputbox").value;
    let intrest = 0;
    if (va >= 20) {
        intrest = 7;
    } else if (va > 10 && va <=19) {
        intrest = 6.8;
    } else if (va > 7 && va <=10) {
        intrest = 6.5;
    } else if (va > 5 && va <= 7) {
        intrest = 6.2;
    } else if (va >= 3 && va <= 5) {
        intrest = 5.8;
    } else {
        intrest = 0;
    }


    let g =document.getElementById("hinder")
    g.style.display = "block";
    g.innerHTML =  `The interest Rate is  ${intrest} % each month`;
}