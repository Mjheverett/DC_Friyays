'use strict'

// 1. Write funciton to get the greatest common divisor

// function gcd(num1,num2){
//     let gcdValue = 0;
//     const divisorArray= [];

//     for (let i = 1; i < num1 || i < num2; i++) {
//         if (num1 % i==0 && num2 % i==0){
//             divisorArray.push(i);
//         }
//     };
//     gcdValue = divisorArray.pop();
//     return gcdValue;
// }
// console.log(gcd(12,144));
// console.log(gcd(95,35));

// 2. Write script to output grade letter

// function grading(numGrade) {
//     if (numGrade >= 90) {
//         console.log("Grade is A")
//     } else if (numGrade >= 80) {
//         console.log("Grade is B")
//     } else if (numGrade >= 70) {
//         console.log("Grade is C")
//     } else if (numGrade >= 60) {
//         console.log("Grade is D")
//     } else  {
//         console.log("Grade is F")
//     }
// };

// grading(85)
// grading(62)

// 3. Write to determine if given year is a leap year

// function isLeapYear(year) {
//     console.log((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// };

// isLeapYear(2016)
// isLeapYear(1754)

// 4. Translate words into pig latin
// let str = "water"

// function pigConvert(str) {
//     let vowels = ['a','e','i','o','u'];
//     let newStr = "";
    
//     if (vowels.indexOf(str[0]) > -1) {
//         newStr = str + "way";
//         return newStr;
//     } else {
//         let firstMatch = str.match(/[aeiou]/g) || 0;
//         let vowel = str.indexOf(firstMatch[0]);
//         newStr = str.substring(vowel) + str.substring(0, vowel) + "ay";
//         return newStr;
//     };
    
// };

// console.log(pigConvert(str));

// 5. Given integer, perform following conditional actions

// function intConditional(int) {
//     if (int % 2 != 0) {
//         console.log("WEIRD");
//     } else if ((int % 2 == 0) && (int >= 2 && int <= 5)) {
//         console.log("NOT WEIRD");
//     } else if ((int % 2 == 0) && (int >= 6 && int <= 20)) {
//         console.log("NOT WEIRD");
//     } else if ((int % 2 == 0) && (int >= 20)) {
//         console.log("NOT WEIRD");
//     }
// };

// intConditional(3)
// intConditional(22)

// 6. Check to see if word is palindrome

// function isPalindrome(word) {
//     let reverseWord = reverseString(word);
//     console.log(word === reverseWord);
// };

// function reverseString(string) {
//     const splitString = string.split("");
//     const reverseArray = splitString.reverse();
//     const reverseString = reverseArray.join("");
//     return reverseString;
// }

// isPalindrome('mom')
// isPalindrome('racecar')
// isPalindrome('monkey')

// 7. We are provided a positive integer num. Can you write a method to repeatedly add all of its digits until the result has only one digit?

// function singleDigitSum(int) {
//     let isLong = String(int).length;
//     let integerArray = [];
//     let sum = int;
    
//     while (isLong != 1) {
//         integerArray = Array.from(sum.toString()).map(Number);
//         sum = integerArray.reduce((a, b) => a + b, 0);
//         isLong = String(sum).length;
//     }
//     console.log(sum);
// };

// singleDigitSum(49)
// singleDigitSum(438)

// function singleDigitSum1(int) {
//     var str_len = String(int).length;
//     var str = String(int)
//     let isLong = Number(str_len);

//     while (isLong>0){
//         let i = 1;
//         let integerArray = [];
//         let sum = 0;
//         while (i <= isLong){
//             integerArray.push(str.charAt(i-1))
//             sum = sum + Number(str.charAt(i-1))
//             i = i+1;
//             return sum
//         }
//         str_len = String(sum).length;
//         str = String(sum)
//         isLong = Number(str_len);
//         console.log(str)
//     }
// };

// console.log(singleDigitSum1(49))
// console.log(singleDigitSum1(438))

// 8. Bubble SortBubble Sort - use an array with length of 8 Compare the first item to the second item.If the first item should be after the second item, swap them Compare the second item to the third item.If the second item should be after the third item, swap them.Continue until the end of the data set is reached.

// function bubbleSort(unsortedArray) {
//     const arrLen = unsortedArray.length;
//     for (let i = 0; i < arrLen; i++) {
//         for (let j = 0; j < arrLen; j++) {
//             if (unsortedArray[j] > unsortedArray[j+1]) {
//                 const temp = unsortedArray[j];
//                 unsortedArray[j] = unsortedArray[j+1];
//                 unsortedArray[j+1] = temp;
//             }
//         }
//     }
// };

// function bubbleSort(a) {
//     let flip;
//     let n = a.length-1;
//     let x=a;
//     do {
//         flip = false;
//         for (let i=0; i < n; i++)
//         {
//             if (x[i] > x[i+1])
//             {
//                 let temp = x[i];
//                 x[i] = x[i+1];
//                 x[i+1] = temp;
//                 flip = true;
//             }
//         }
//         n--;
//     } while (flip);
//         return x; 
// }

// let arr = [12, 4, 546, 122, 42, 1, 3223, 234];

// console.log(bubbleSort(arr));
// console.log(bubbleSort([100, 2, 5, 82, 43, 96]));

// 9. Return length of the longest word in a sentence

// function longestWord(sentence) {
//     const wordArray = sentence.split(" ");
//     console.log("word array:", wordArray);
//     const wordLengths = [];
//     wordArray.map(word => {
//         wordLengths.push(word.length);
//         return wordLengths;
//     });
//     console.log(Math.max(...wordLengths));
// };

// longestWord('Those who can imagine anything, can create the impossible.')
// longestWord('Those who dare to fail miserably can achieve greatly.')