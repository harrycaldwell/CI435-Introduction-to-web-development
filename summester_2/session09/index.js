window.addEventListener("load", init);

function init(){
    let p2 = document.querySelector("#p2");
    p2.addEventListener("click", function(){
        let temp1 = p2.textContent;
        p2.textContent = p2.title;
        p2.title = temp1;
    });

    let img = document.querySelector("img");
    img.addEventListener("click", function(){
        let temp2 = img.src;
        img.src = img.alt;
        img.alt = temp2;
    });

    var list_content = ["Apple", "Banana", "Orange", "Mango", "Papaya"];
    let button4 = document.querySelector("#button4");
    button4.addEventListener("click", function(){
        let div4 = document.querySelector("#div4");
        div4.appendChild(document.createElement("ul"));// create ul element
        let ul = document.querySelector("ul");
        list_content.forEach(function(item){//forEach loop for the list content array
            let li = document.createElement("li");// create li element
            li.textContent = item;// set the text content of the li element
            ul.appendChild(li);// append the li element to the ul element
        });
    });

    var table_content = [     
        ["Tom", 20, "BSc (Hons) Computer Science"],
        ["Mary", 19, "BSc (Hons) Computer Science (Games)"],
        ["Jerry", 21, "BSc (Hons) Digital Games Production"],
        ["Jane", 19, "BSc (Hons) Digital Media"],
        ["Olivia", 22, "BSc (Hons) Digital Media Development"],
        ["Jack", 20, "BSc (Hons) Software Engineering"]
    ];
    let btn5 = document.querySelector('#btn5');
    btn5.addEventListener('click', function(){ 
        let div5 = document.querySelector('#div5'); //select div5
        div5.appendChild(document.createElement('table')); //create table

        var tr;
        var arr;
        for (var row = 0; row < table_content.length; row++){
            document.querySelector('table').appendChild(document.createElement('tr'));
            if (row == 0){
                tr = document.querySelector('tr');
            }
            else{
               tr = tr.nextSibling;
            }
            arr = table_content[row];
            arr.forEach((item) => {
                td = document.createElement('td');
                td.textContent = item;
                tr.appendChild(td);
            });
        }
    });
    let div6 = document.querySelector('#div6');
    let btn6 = document.querySelector('#btn6');
    btn6.addEventListener('click', function(){
        for(i = 0; i<10; i++){
        let p = document.createElement("p");
        p.textContent = "This is paragraph <n>"
        div6.appendChild(p);
        }
    });

    let btn7 = document.querySelector('#btn7');
    btn7.addEventListener('click', function(){
       while (div6.lastChild) {
           div6.removeChild(div6.lastChild);
       }
    });
}