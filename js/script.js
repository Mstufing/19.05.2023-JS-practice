
// todo ----- VERY EASY -----

// ? Task #1
// ? Array of Strings to Array of Numbers

// function toNumberArray(arr) {
//     return arr.toString().split(',').map(elem => Number(elem));
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let myInp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = toNumberArray(myInp1.ariaValueMax.trim().split(" "));
// }

// ? Task #2
// ? Repeat String

// function repeatString(txt, n) {
//     for (let i = 0; i < txt.length; i++)
//         if (typeof txt === 'string')
//             return txt.repeat(n);
//     return "Not A String !!"
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let firstInp = document.querySelector('.inp1');
//     let secondInp = document.querySelector('.inp2');
//     let result = document.querySelector('.result');

//     result.innerHTML = repeatString(firstInp.value, secondInp.value);
// }

// console.log(repeatString(15, 5))

// ? Task #3
// ? Burglary Series (14): Adjectives Total

// function totalAmountAdjectives(obj) {
//     return Object.keys(obj).length;
// }

// ? Task #4
// ? ES6: Destructuring Arrays III

// DO NOT change arr
// DO NOT USE var [lips] = arr[2]
// "eyes", "nose", and "ears" should not be assigned to anything

// const arr = ["eyes", "nose", "lips", "ears"]
// var [,,lips,] = arr

// ? Task #5
// ? ES6: Destructuring Arrays II

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Fix the following using es6 destructuring
// Only edit what's inside of [ trans1, trans2, trans3, trans4 ]

// let [ trans1, trans2, [trans3, [trans4]] ] = arr

/*
console.log(trans1) // should output "cars"
console.log(trans2) // should output "planes"
console.log(trans3) // should output "trains"
console.log(trans4) // should output "motorcycles"
*/

// ? Task #6
// ? Sum of Minimums

// function sumMinimums(arr) {
//     let myArr = arr.map(elem => {
//         return elem.sort((a, b) => a - b)[0]
//     })
//     return myArr.reduce((acc, cur) => Number(acc) + Number(cur));
// }

// ? Task #7
// ? Is the Water Boiling?

// function isBoiling(temp) {
//     if ((temp >= '100' && temp.endsWith('C')) || (temp >= '212' && temp.endsWith('F')))
//         return true;
//     return false;
// }

// let myBtn = document.querySelector('.btn');

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp1');
//     let myRes = document.querySelector('.result');

//     myRes.innerHTML = isBoiling(myInp.value);
// }

// ? Task #8
// ? Raucous Applause

// function countClaps(str) {
//     let arr = str.split('').filter(elem => elem === 'C')
//     return arr.length;
// }

// let myBtn = document.querySelector('.btn');

// myBtn.onclick = () => {
//     let myInp = document.querySelector('.inp1');
//     let myRes = document.querySelector('.result');

//     myRes.innerHTML = countClaps(myInp.value);
// }




// todo ----- EASY -----

// ? Task #1
// ? Join Two Portions of a Path

// function joinPath(portion1, portion2) {
//     let arr1 = portion1.split('').filter(elem => elem != '/');
//     let arr2 = portion2.split('').filter(elem => elem != '/');
//     return arr1.join('') + '/' + arr2.join('');
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let inp2 = document.querySelector('.inp2');
//     let result = document.querySelector('.result');

//     result.innerHTML = joinPath(inp1.value, inp2.value);
// }

// ? Task #2
// ? Transform into an Array with No Duplicates

// function set(arr) {
//     let newArr = [];
//     let sortedArray = arr.sort((a, b) => a - b)
//     for (let i = 0; i < sortedArray.length; i++) {
//         if (sortedArray[i] !== sortedArray[i + 1]) {
//             newArr.push(sortedArray[i])
//         }
//     }
//     return newArr;
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = set(inp1.value.trim().split(" "));
// }




// todo ----- MEDIUM -----

// ? Task #1
// ? Hitting the Jackpot

// function testJackpot(result) {
//     return result.every(elem => elem === result[0]);
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = testJackpot(inp1.value.trim().split(" "));
// }


// ? Task #2
// ? Match the Last Item

// function matchLastItem(arr) {
//     let lastItem = arr.pop();
//     return arr.join('') === lastItem ? true : false;
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = matchLastItem(inp1.value.trim().split(" "));
// }

// ? Task #3
// ? Remove Duplicates from an Array

// function removeDups(arr) {
//     return arr.filter((elem, index, array) => array.indexOf(elem) == index);
// }

// let myButton = document.querySelector('.btn');

// myButton.onclick = () => {
//     let inp1 = document.querySelector('.inp1');
//     let result = document.querySelector('.result');

//     result.innerHTML = removeDups(inp1.value.trim().split(" "));
// }


// ? Task #4
// ? Multiplying Numbers in a String

// function multiplyNums(nums) {
//     if (nums.split(' ').length === 1)
//         return Number(nums)
//     return nums.split(',').reduce((acc, cur) => Number(acc) * Number(cur));

// }
