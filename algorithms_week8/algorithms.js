// 1. Accepts string and converts first letter of each word to uppercase

// function upperCase(str) {

//     return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
// };

// console.log(upperCase("the quick brown fox"));
// console.log(upperCase("jumps over the lazy dog"));

// 2. Write function that returns a passed string with letters in alphabetical order.

// function alphsortstring(astring) {
//     var stringArray = [];
//     var sortstringArray = [];
//     var sortedString = "";
//     for (let i =0;i<astring.length;i++){
//         stringArray.push(astring[i])
//     }
//     sortstringArray = stringArray.sort();
//     for (let i =0;i<sortstringArray.length;i++){
//         sortedString = sortedString + sortstringArray[i]
//     }
//     return sortedString;
// };
// console.log(alphsortstring('cccbbbaaa'))

// 3. Write function that accepts number and checks if prime or not.

// function isPrime(number) {
//     for (let i = 2; i < number; i++)
//         if (number % i === 0) return false;
//     return number > 1
// }

// console.log(isPrime(829));
// console.log(isPrime(438));

// 4. Write function that accepts 2 arguments, a string and letter that will count the number of occurences.

// function countLetter(str, x) {
//     let occurence = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === x) {
//             occurence += 1;
//         }
//     }
//     return occurence;
// };

// console.log(countLetter("digitalcrafts", "t"));
// console.log(countLetter("oopsiedaisy", "a"));

// 5. Write program that prints the numbers 1 to n. For multiples of 3 print "Fizz" instead, and for multiples of 5 print "Buzz". For multiples of 3 and 5 print "FizzBuzz".

function fizzBuzz(n) {
    for (let i = 1; i < n + 1; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(25);