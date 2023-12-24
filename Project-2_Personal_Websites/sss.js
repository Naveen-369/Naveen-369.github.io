document.addEventListener("DOMContentLoaded",()=> {
    let name = prompt("Enter your name: ");
    let doc = document.getElementById("Informa");
    if (doc) {
        doc.innerHTML = `<b>Welcome ${name} ! </b> ${doc.textContent}`;
    }
});
