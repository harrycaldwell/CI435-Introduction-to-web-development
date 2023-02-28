// HTML elements we work with
var btnUserVal = document.querySelector('#btnUserVal');
var txtPasswordVal = document.querySelector('#txtPasswordVal');
var output = document.querySelector('#output');

//Activate the button
btnUserVal.addEventListener('click', processClick);

function processClick() {
    let numberFound_bool = false;
    let password_str = txtPasswordVal.value, msg_str = "";
    // Add check for minimum characters here
    // Check it only contains allowabe characters - regular expression !!!
    if (!password_str.match(/^[0-9a-zA-Z]+$/)) {
        msg_str = "Password can only contain letters and numbers";
    } else {
        // Loop to check for uppercase, and numbers
        for (let charIdx = 0; charIdx < password_str.length; charIdx++) {
            let next_char = password_str.charAt(charIdx);
            if (next_char >= "0" && next_char <= "9") {
                numberFound_bool = true;
            }
            // add check for capital letters here
        } // end of for
        // check we have found atleast 1 digit and 1 uppercase character
        // add check for  upper case characters and error messge for user if they are not included
        if (numberFound_bool) {
            msg_str = "Password is fine";
        } else {
            if (!numberFound_bool) {
                msg_str += "Password must contain at least one Number";
            }
        }
    }
    // Display message to the user
    output.textContent = msg_str;
}// end of processClick()