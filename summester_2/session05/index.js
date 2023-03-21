var friends = ["Benjamin","Lily","Emily","Gabriel"];

//add two new friends called "Isabella" and "Charlotte"
friends.push("Isabella","Charlotte");

//change the last element of the array to "Miles"
friends[friends.length-1] = "Miles";

//using splice() replace the second and third friends in the array with a single new friend "Aria"
friends.splice(1,2,"Aria");

//Using the pop() method remove the last element of the array and insert it at index 0 using the unshift() method
friends.unshift(friends.pop());

//Reverse the process by using the shift() method to remove the first element of the array and the push() method to add it at the end of the array
friends.push(friends.shift());

//Using the indexOf() method, find the index of the name Aria in the array
console.log(friends.indexOf("Aria"));

//Using the indexOf() method, log to true the console if the array contains the name Bob or false otherwise. Try doing this in a single statement.
console.log(friends.indexOf("Bob") != -1);

//Using the sort() method, sort the array in ascending alphabetical order
friends.sort();

//Using the join() method, create a string of all names separated by a comma space (", ") 
console.log(friends.join(", "));

//Declare a new variable count, then loop over the array friends and add the length of each name to the count variable. Log to the console the total number of characters in all names and the average numbers of characters per name.
let count = 0;
for(let i = 0; i<friends.length;i++){
    count += friends[i].length;
}
console.log(count);
console.log(count/friends.length);
