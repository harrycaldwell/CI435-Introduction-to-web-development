window.addEventListener("load", init);

function init() {
    console.log("into init");
    let selBtn = document.querySelector("#selBtn");
    selBtn.addEventListener("click", btnClicked);
} // end of init()

// Event listener
function btnClicked() {
    let course = document.querySelector("#course");
    let selected = course.options[course.selectedIndex].value;
    document.querySelector("#output").textContent=selected;
}