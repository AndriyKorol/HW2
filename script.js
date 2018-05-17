// 1
let string1 = "I am in the easycode";
let newString1 = "";

for (let i = 0; i < string1.length; i++) {    
    newString1 += string1[i] === " " ? string1[i] + string1[++i].toUpperCase()
            : i === 0 ? string1[0].toUpperCase()
            : string1[i];
}
console.log(string1 + " -> " + newString1);

// 2
let string2 = "tseb eht ma i";
let newString2 = "";
let n = string2.length;

for (; n > 0 ;) {
    newString2 += string2[--n];
}
console.log(string2 + " -> " + newString2);

// 3
let number = 10;
let factorial = 1;
while (number) {
    factorial *= number--; 
}
console.log("10! = " + factorial);

// 4
let count = '';

for(i = 1; i <= 10; i++) {
    count += i !== 10 ? i + ", " : i;
}
console.log("Считаем до 10и: " + count);

// 5
let string3 = "JavaScript is a pretty good language";
let newString3 = "";

for (let i = 0; i < string3.length; i++) {    
    newString3 += string3[i] === " " ? string3[++i].toUpperCase()
            : i === 0 ? string3[0].toUpperCase()
            : string3[i];
}
console.log(string3 + " -> " + newString3);

// 6
for (i = 1; i <= 15; i++) {
    if (i%2 !== 0)  console.log(i);
}
