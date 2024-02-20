/*Declaration of the function for the Pasword Authentication*/
PassAuth=()=>{
    let name =document.getElementById("UserName").value;
    let password=document.getElementById("PassWord").value;
    // Regular expressions to match each condition
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[1-9]/;
    const specialCharRegex = /[@']/;

    // Check if the password length is at least 9 characters
    if (password.length < 9) {
        alert(`Password length must be at least 9 characters Please enter more ${name}`);
        return;
    }

    // Check if the password satisfies all other conditions
    const hasLowercase = lowercaseRegex.test(password);
    const hasUppercase = uppercaseRegex.test(password);
    const hasNumber = numberRegex.test(password);
    const hasSpecialChar = specialCharRegex.test(password);


    //Alert the user if the contraints are not met
    if(hasLowercase && hasUppercase && hasNumber && hasSpecialChar)
        window.open("Registration.html");
    else
        alert("Your password strength is Too weak Please enter another password ! ! ! !");
}

/* Declaration of the funciton to validate the form */
NewUser=()=>{
    let name=document.getElementById("Name").value;
    let state = document.getElementById("State").value;
    let dob = document.getElementById("DoB").value;
    let email = document.getElementById("Email").value;
    console.log(dob[2],name,state,dob,email,Male.checked);
    let numarr=/[0-9]/;
    let specialarr=/[@']/;
    if(numarr.test(name) || specialarr.test(name) || name==""){
        alert("Invalid Name Input ! ! ! !");
        return;
    }
    if(state==""){
        alert("Please Select a State");
        return;
    }
    if(dob[2]!='0' && dob[2]!='9'){
        alert("Enter a Valid Age ! ! ! !");
        return;
    }
    if(Male.checked == false && Female.checked == false && Prefer.checked==false){
        alert("Please Select your Gender ! ! ! !");
        return;
    }
    if(PoP.checked == false && Rock.checked == false && Melody.checked == false && Others.checked==false){
        alert("Please Select your Music Jurnor ! ! ! ! !");
        return;
    }
    if(!email.endsWith("@gmail.com")){
        alert("Please enter a valid email Address ! ! ! !");
    }
    //Creation of the Javascript Object
    let obj={
        "name":name,
        "State":state,
        "Date_Of_Birth":dob,
        "Email_Id":email
    }
    //Returning a JSON Object
    let db=JSON.parse(JSON.stringify(obj))
    console.log(db);
}
