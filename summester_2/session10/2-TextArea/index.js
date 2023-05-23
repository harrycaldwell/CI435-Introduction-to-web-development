window.addEventListener("load", init);

function init() {
    console.log("into init");
    let textArea_elm = document.querySelector("#txtArea");
    textArea_elm.addEventListener("keyup", keyupped);
} // end of init()

// Key up listener
function keyupped(ev) {
    console.log("Into keyupped");
    document.querySelector("#stuff").textContent+=ev.key;
}