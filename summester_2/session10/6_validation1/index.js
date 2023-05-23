window.addEventListener("load", function () {
    var form = document.querySelector("#frmtemp");
    form.addEventListener("submit", convert);
});

// Event listener
function convert(evt) {
    var tempF,
        tempC = document.querySelector("#tempC").value.trim();
    // check that field is not empty or only spaces
    if (tempC.length > 0) {
        tempC = parseFloat(tempC);
        // check what has been entered is a number
        if (!isNaN(tempC)) {
            tempF = Math.round((tempC * 1.8) + 32, 1);
        } else {
            tempF = "Not a number";
        }
    } else {
        tempF = "Empty";
    }
    document.querySelector("#tempF").textContent = tempF;
    // stop default action whihc is to submit the form
    evt.preventDefault();
}
