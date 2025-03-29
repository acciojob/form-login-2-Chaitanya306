//your JS code here. If required.
let firstName = document.getElementsByName("First Name");
let lastName = document.getElementsByName("Last Name");
let number = document.getElementsByName("Phone Number");
let email = document.getElementsByName("Email ID");

function myFunction(){
	
  console.log(`First Name: ${firstName[0].value} Last Name: ${lastName[0].value} Phone Number: ${number[0].value} Email ID: ${email[0].value}`)
}

