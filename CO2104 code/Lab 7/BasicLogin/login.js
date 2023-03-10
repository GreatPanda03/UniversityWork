var attempts = 3

function validate() {
    let username = document.getElementById("username").value; // username input
    let password = document.getElementById("password").value; // password input

    console.log(username, password);

    // hard-coded login details
    if (username == "user" && password == "password") {
        alert("Login successful!");
        window.location = "https://le.ac.uk/";
        
        // stops the browser from doing anything else
        // if the user successfully logs in
        return true; 

    } else {
        attempts -= 1;
        alert("Login unsuccessful. You have " + attempts + " attempt(s) left.")
        
        // hiding the login form to prevent further attempts
        if (attempts == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
        
        return false;
    }
}