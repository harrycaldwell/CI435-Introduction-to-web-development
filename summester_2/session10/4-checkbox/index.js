window.addEventListener("load", init);

function init() {
    console.log("into init");
    let selBtn = document.querySelector("#selBtn");
    selBtn.addEventListener("click", btnClicked);
} // end of init()

// Event listener
function btnClicked() {
    // Get each input element inside the form
    let elems = document.querySelectorAll("#fruitFrm input");
    let output_elm = document.querySelector("#output");
    output_elm.textContent="";
    ///Loop through each check box element
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            // if it is checked add to putput message
            output_elm.textContent += " " + elems[i].value;
        }
    }
}