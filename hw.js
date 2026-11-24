let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log("Sum of array:", sum);



// even odd

let arr = [10, 15, 20, 25, 30, 35];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log("Even count:", evenCount);
console.log("Odd count:", oddCount);


// reverse array

let arr = [10, 20, 30, 40, 50];
let reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("Reversed array:", reversed);