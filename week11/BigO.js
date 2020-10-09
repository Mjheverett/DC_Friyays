// Problem 1: print all prime factors of a number

// const primeFac = (n) => {
//     let factors = [];
//     for (let i = 0; i < n; i++) {
//         if (n % i == 0) {
//             factors = [...factors, i];
//         }
//     }
//     console.log("factors", factors);
//     let primeFactors = [];
//     for (let j = 0; j < factors.length; j++) {
//         console.log("j", j);
//         console.log("prime factors inside j", primeFactors);
//         for (let i = 2; i <= factors[j] / 2; i++) {
//             if (factors[j] % i == 0) {
                
//             } else {
//                 primeFactors.push(factors[j]);
//             }
//         }
//     }
//     console.log("prime factors", primeFactors);
//     return;
// }

// primeFac(50);

// Problem 2: Reverse a string

// const strReverse = (string) => {
//     console.log(string);
//     let strArr = string.split('');
//     newStrArr = [];
//     for (let i = 0; i < strArr.length; i++) {
//         newStrArr[i] = strArr[strArr.length - i - 1];
//     }
//     const revString = newStrArr.join('');
//     console.log(revString);
// }

// strReverse("Nuclear");

// Problem 3: 

const valueIndex = (array, value) => {
    const index = array.indexOf(value);
    console.log(index);
}

valueIndex([10, 15, 29, 50], 10);