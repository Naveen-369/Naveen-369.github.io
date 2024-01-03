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
    tasks.push(message);
    let doc = document.createElement('p');
    doc.textContent = message; // Use textContent instead of innerHTML for text content
    output.appendChild(doc);
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
            e.target.style.textDecoration = "line-through";
            console.log(e.target.textContent);
            remove(e.target.textContent);
        }
    });
    output.addEventListener("dblclick", (e) => {
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
    }
})
