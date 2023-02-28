// HTML elements we work with
var btnUserVal = document.querySelector('#btnUserVal');
var txtUserVal = document.querySelector('#txtUserVal');
var output = document.querySelector('#output');

//Activate the button
btnUserVal.addEventListener('click', processClick);

function processClick() {
    console.log("Into processClick");
    var userTxt_str = txtUserVal.value;
    output.textContent = "User text is: " + userTxt_str;
}