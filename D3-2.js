// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let ex1Array = [1, 3, 5];
let ex1ArrayReverse = [];
for(let i = ex1Array.length-1; i>=0; i--){
    ex1ArrayReverse.push(ex1Array[i])
}
console.log(ex1ArrayReverse, "\n");

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

let ex2Array = [1, 12, 5, 4];
let max = 0;
for(let i = 0; i< ex2Array.length; i++){
if(max < ex2Array[i])
{
    max = ex2Array[i]
}
}

console.log("Array: "+ex2Array, "\n", "Biggest number: "+ max, "\n");

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

let ex3Array = [1, 55, 27, 3];
let min = 31991;
for(let i = 0; i< ex3Array.length; i++){
if(max > ex3Array[i])
{
    max = ex3Array[i]
}
}

console.log("Array: "+ex3Array, "\n", "Smallest number: "+ max, "\n");

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let ex4Array = [7, 16, 6, 29, 38, 81];
let even = [];
for(let i = 0; i< ex4Array.length; i++){
if(ex4Array[i] % 2 === 0)
{
    even.push(ex4Array[i])
}
}
console.log(even, "\n");
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let ex5Array = [22, 19, 31, 8, 32, 12];

let oddArray = ex5Array.filter(n => n % 2 ===0)

console.log(oddArray, "\n");

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let ex6Array = "Never gonna give you up";
let ex6NoVowels = ex6Array.replace(/[aeiou]/gi,'')
console.log(ex6NoVowels)
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let ex7Array = [2, 5, 10, 25, 7, 34];
console.log("Array at start: " , ex7Array);
for(let i = 0; i< ex5Array.length; i++){
    ex7Array[i]++;
}
console.log("Array after increasing by 1: " , ex7Array, "\n");

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let ex8Array = ["strive", "is", "great"];
let ex8ArrayReplace = [ex8Array[0].length, ex8Array[1].length, ex8Array[2].length];
console.log(ex8Array, "\n", ex8ArrayReplace);
