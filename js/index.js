"use strict"
/*
function validation()
{
var nameField = document.getElementById("n2");
if(nameField.type == "password")
{
    nameField.type= "text";
}
else
{
    nameField.type = "password";
}
console.log(nameField.type);
}
*/

function resetForm()
{
    document.getElementById("firstname").value = " ";
    document.getElementById("lastname").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("password").value = " ";
    document.getElementById("confirmpassword").value = " ";
    document.getElementById("contactnumber").value = " ";
}
var userDetails = document.querySelector("#registration");
//userDetails.addEventListener("click",resetForm);

function uniqueStyle()
{
    var a = document.getElementById("formDeg");
    //a.childNodes[2].classList.add("unique-field");
    console.log(a);
}

