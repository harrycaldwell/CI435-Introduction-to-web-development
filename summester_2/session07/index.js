window.addEventListener("load", function(){

    console.log("Document loaded - ready to go...");

    // write your tutorial code here...
    console.log(document.querySelector("#elem1"));//have to specify the type of element
    console.log(document.getElementById("elem1"));//looks for an ID 
    
    var pElements = document.getElementsByTagName("p");//returns an array of all the p elements
    for (var i = 0; i < pElements.length; i++) {
        console.log(pElements[i].textContent);
    }
    console.log(pElements.length);

    var highElements = document.getElementsByClassName("highlight");//returns an array of all the elements with the class name
    for (var i = 0; i < highElements.length; i++) {
        console.log(highElements[i].textContent);
    }
    console.log(highElements.length);

    var liElements = document.getElementById("first").getElementsByTagName("li");//returns an array of all the li elements within the element with the id of first
    for (var i = 0; i < liElements.length; i++) {
        console.log(liElements[i].textContent);
    }
    console.log(liElements.length);

    var li2Elements = document.querySelectorAll("li.highlight");//returns an array of all the li elements within the element with the class name of highlight
    for (var i = 0; i < li2Elements.length; i++) {
        console.log(li2Elements[i].textContent);
    }
    console.log(li2Elements.length);

    var li3Elements = document.querySelectorAll("li.highlight,li.highlight");
    for (var i = 0; i < li3Elements.length; i++) {
        console.log(li3Elements[i].textContent);
    }
    console.log(li3Elements.length);

    //Using querySelector and querySelectorAll is better than other methods because it is more efficient and faster to program

    var x = document.querySelector("ul>.highlight");//returns the first element that matches the specified selector
    console.log(x.length);

    var y = document.querySelector("#first");
    var yChild = y.firstChild;
    console.log(yChild.nodeType + " " + yChild.nodeName + " " + yChild.textContent);
    var ySibling = y.nextSibling;
    console.log(ySibling.nodeType + " " + ySibling.nodeName + " " + ySibling.textContent);
    var yParent = y.parentNode;
    console.log(yParent.nodeType + " " + yParent.nodeName + " " + yParent.textContent);
});
