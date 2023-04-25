function multiply(a,b){
    return a*b;
}

console.log(multiply(2,3));
console.log(multiply(2,3,4));
//Only the first two arguments are used, the third one is ignored
//NaN stands for not a number and is returned because there is no number to return
//undefined is used when a variable has not been assigned a value
//missing peramiters give NaN and functions only take the correct amount of peramiters

function countChar(c,s){//counts the number of times a character appears in a string
    var count = 0;
    for (var i=0;i<s.length;i++){
        if (s.CharAt(i) == c){
            count++;
        }
    }
}

console.log(countChar("l","Hello"));

function countStr(str,str1){//counts the number of times a string appears in another string
    var count=0;
    var index = 0;
    while(str.indexOf(str1) !==-1){
        count++;
        index = str.indexOf(str1);
        str=str.substring(index+1);
    }
}
console.log(countStr("cream","I scream you scream we all scream for ice cream"));
console.log(countStr("sea","she sells sea shells by the sea shore. The shells she sells are surely seashells i'm sure. so if she sells sea shells on the sea shore, i'm sure that the shells are seashore shells"));

function rotate(arr,num){ //rotates an array by a given number
    for  (let i=0;i<num;i++){
        arr.splice(0,0,arr.pop());
    }
    return arr;
}

console.log(rotate(["Harry","Sarah","Oscar","Tina"],2));

(function(){ //anonymous function (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
    var arr=[12, 9, 33, 8, 71, 2, 41, 5];

    arr.sort(); //ascending alphabetical order
    console.log(arr);

    arr.sort(function (a,b){
        return a-b;
    });//ascending numerical order
    console.log(arr);

    arr.sort(function (a,b){
        return b-a;
    });//descending numerical order
    console.log(arr);

})();