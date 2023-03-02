var attempt = 3;

function validate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if(username == "user" && password == "name") {
		alert("Login sucessfully");
		window.location = "https://le.ac.uk/";
		return false;

	} else {
		attempt--;
		alert("You have left " + attempt + " attempts.");
	} 
	
	if (attempt == 0) {
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
	}
}

