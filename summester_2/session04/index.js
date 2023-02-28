var str = "I'm learning Javascript in my web development module.";
//Prints the length of the string
console.log(str.length)
//Finds the position of the start of the word "Javascript" and the end of the word and prints what is there.
console.log(str.substring(12,23))
//For loop that counts how many times the letter "e" appears in the var
//also declaring a count 
let count = 0;
for (let i = 0; i <str.length;i++){
    if(str[i] == "e"){
        count++;
    }
}
console.log(count);// prints 6

//find the positions of "m" in the str

for(let i = 0; i<str.length;i++){
    if(str[i] == "m"){
        console.log(i);
    }
}

//reversing var str and printing it to the screen
let reverse = "";
for(let i = str.length-1; i>=0;i--){
    reverse += str[i];
}
console.log(reverse);

//This takes the URL and uses the if statement to log to the console if the URL is secure, insecure or local
var url = window.location.href;
if (url.startsWith("http:")){
    console.log("This is an insecure website");
}else if (url.startsWith("https:")){
    console.log("This is a secure website");
}else if (url.startsWith("file:")){
    console.log("This is a local file");
}