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
console.log(count);
