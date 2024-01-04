//Check if the memory is stored in the local storage and insert it
window.onload=()=>{
    localStorage.getItem("tasks")?tasks=JSON.parse(localStorage.getItem("tasks")):tasks=[];
    //Insert the local storage elements in the html page
    tasks.forEach((task)=>{
    let divdoc=document.createElement('p');
    divdoc.textContent=task;
    document.querySelector(".tasks").appendChild(divdoc);
})
}
//Declaration fo the array
let tasks = [];

//Declaraion of the function for inserting tasks into the division
document.addEventListener("DOMContentLoaded",()=>{
    //declaratin of the handlers
    let input = document.getElementById("tasksadder");
    let signal = document.getElementById("addbutton");
    let output = document.querySelector(".tasks"); // Use querySelector to get the tasks container


    //Declaration fo the function for buttons
    addtasks=()=>{
    let message = input.value;
    if(message!="")
    {    
        tasks.push(message);
        let doc = document.createElement('p');
        doc.textContent = message; // Use textContent instead of innerHTML for text content
        output.appendChild(doc);
        localStorage.setItem("tasks",JSON.stringify(tasks));}
        input.value = "";
    }

    // Attach click event listener to the button using JavaScript
    signal.addEventListener("click", addtasks);
    input.addEventListener("keypress", (event)=>{
        if(event.key=="Enter"){
            addtasks();
        }
    });
});

//declaration of the functino for the stricking and the deletion of the tasks
document.addEventListener("DOMContentLoaded",()=>{
    //declaratin of the handlers
    let output = document.querySelector(".tasks"); // Use querySelector to get the tasks container

    //Declaration fo the function for buttons
    output.addEventListener("click", (e) => {
        if (e.target.tagName === "P") {
            console.log(e.target.textContent);
            output.removeChild(e.target);
            remove(e.target.textContent);
        }
    });
    //Declaration of the remove function
    remove=(message)=>{
        let num=tasks.indexOf(message);
        tasks.splice(num,1);
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
})