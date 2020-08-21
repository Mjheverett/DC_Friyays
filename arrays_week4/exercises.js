//Exercise 1
// let arr = ["some", 23, "HA", 32]
// function check (arr) {
//     return Array.isArray(arr);
// }
// console.log(check(arr));

//Exercise 2
let arr = [1,2,3,4,5,6]
// let n = 3

// function get_element (arr,n){
//     const remove = arr.splice(0,n) 
//     console.log(remove); 
//     }
// get_element(arr, n);

//Exercise 3
// function joinArray (arr) {
//     let string = arr.join('');
//     return string;
// }

// console.log(joinArray(arr));

//Exercise 4
const numbers = 1526262
function accept_number (numbers) {
    let num = String(numbers)
    console.log(num)
    num = Array.from(num)
    let newNum = num.join("-")
    return newNum
}
console.log(accept_number(numbers))