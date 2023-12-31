FunctionSelector = () => {
    let val = document.getElementById("city").value;
    switch (val) {
        case '1':
            window.open('https://en.wikipedia.org/wiki/Chennai');
            break;
        case '2':
            window.open('https://en.wikipedia.org/wiki/Vellore');
            break;
        case '3':
            window.open('https://en.wikipedia.org/wiki/Kovai');
            break;
        case '4':
            window.open('https://en.wikipedia.org/wiki/Tiruppur');
            break;
        default:
            alert("Please select a city");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let butt = document.getElementById("submit");
    if (butt) {
        butt.addEventListener("click", FunctionSelector);
    } else {
        alert("Button element not found.");
    }
});