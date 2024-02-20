//Declaration of the function for the Pasword Authentication
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
        alert("Password length must be at least 9 characters");
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
