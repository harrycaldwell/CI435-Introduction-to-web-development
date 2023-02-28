
// ================= Check if a string contains specified characters
let charAllowed_bool = str.length > 0; //check if there are any characters
// Check each character in the string until the end or we find one that isn't allowed
for (let idx = 0; idx < str.length && charAllowed_bool; idx++) {
    let ch = str.charAt(idx);
    charAllowed_bool = ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9"));
}
console.log(charAllowed_bool);
