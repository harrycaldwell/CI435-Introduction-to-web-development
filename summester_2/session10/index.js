window.addEventListener("load", function(){
    let f = document.querySelector("#fahrenheit");
    f.addEventListener("keyup",function(){
        let tempf = document.querySelector("#fahrenheit").value.trim()
        var tempC;
        if (tempf.length > 0){
            tempC = tempf-32;
            tempC =tempC * 5/9;
            tempC = Math.floor(tempC *10)/10;
            document.querySelector("#tempC").textContent = tempC;
        }
    });

    let form3 = document.querySelector("#form3");
    form3.addEventListener("submit",function(evt){
        let div3 = document.querySelector("#div3");
        let input3 = document.querySelector("#email")
        var email = input3.value.trim();
        //clear previous warnings issued
        while (div3.lastChild){
            div3.removeChild(div3.lastChild);
        }
        
        //if the email is too short
        if(email.length<20){
            input3.style.backgroundColor = "red";
            let p = document.createElement("p");
            p.textContent = "Email is not long enough";
            div3.appendChild(p);
        }

        //If the Email is ok
        if(email.includes("@brighton.ac.uk")||email.includes("@uni.brighton.ac.uk")){
            input3.style.backgroundColor ="green"
        }

        //If the Email does not include the above
        else{
            input3.style.backgroundColor="red";
            let p = document.createElement("p");
            p.textContent = "Email is not a valid Uni of Brighton Email";
            div3.appendChild(p)
        }
        evt.preventDefault()
    });

    
    let btn4add = document.querySelector("#btn4add");
    btn4add.addEventListener("click",function(evt){
        let ul = document.querySelector("#ul4");
        var item = document.querySelector("#input4").value;
        var li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
        evt.preventDefault();
    });

    let btn4clear = document.querySelector("#btn4clear");
    btn4clear.addEventListener("click",function(evt){
        let ul = document.querySelector("#ul4");
        while (ul.lastChild){
            ul.removeChild(ul.lastChild);
        }
        evt.preventDefault();
    });

    let form5 = document.querySelector("#form5");
    form5.addEventListener("submit",function(evt){
        //Grabbing all items
        let checkboxes = document.querySelectorAll("input[type='checkbox'");
        let radios = document.querySelectorAll("input[type='radio'");
        let select = document.querySelector("select");
        let selected =select.options[select.selectedIndex].value;
        let text = document.querySelector("#textArea");

        //logging the checkboxes
        checkboxes.forEach(function(item){
            if(item.checked){
                console.log("Checked:" + item.value);
            }
        });
        //log the radio
        radios.forEach(function(item){
            if(item.checked){
                console.log("Selected Radio:" +item.value);
            }
        });

        //logging text area
        console.log(text.value);
        evt.preventDefault();
    });
});