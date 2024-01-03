let arr = {};
let keys = [];

document.addEventListener("DOMContentLoaded", () => {
	let g = document.getElementById("fromcurrency");
	let gh=document.getElementById("tocurrency");
// Function to generate dropdown options
const populateDropdownforUP = () => {
    keys.forEach(key => {
	let option = document.createElement("option");
    option.value = arr[key];
    option.text = key;
    g.appendChild(option);
    });
};
//Function to generate dropdown options
const populateDropdownforDOWN = () => {
    keys.forEach(key => {
	let option = document.createElement("option");
    option.value = arr[key];
    option.text = key;
    gh.appendChild(option);
    });
};
//Fetching API
fetch("https://open.er-api.com/v6/latest")
    .then((resolve) => resolve.json())
    .then((message) => {
    arr = message.rates;
	keys = Object.keys(arr);
    populateDropdownforUP(); // Populate dropdown after keys are available
	populateDropdownforDOWN();
});
});

//Function declaration
fff = () => {
	let g = document.getElementById("fromcurrency");
	let gh=document.getElementById("tocurrency");
	let fromcurrency = g.options[g.selectedIndex].value;
	let tocurrency = gh.options[gh.selectedIndex].value;
	let amount = document.getElementById("fromvalue").value;
	let result = document.getElementById("tovalue");
	let rate = tocurrency / fromcurrency;
	result.textContent = (amount * rate).toFixed(2);
}; 
//Declaratrion of the swap function
swap=()=>{
	let a=document.getElementById("tovalue");
	console.log(a.textContent);
	document.getElementById("fromvalue").value=a.textContent;
	a.innerHTML="";
	fff();
}