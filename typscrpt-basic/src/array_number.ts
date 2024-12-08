let numeric: number[] = [0, 1, 2, 3, 40, 50, 60, 70, 80, 90, 21, 31, 41, 51, 61, 71, 81, 91];

// Display index array and value
console.log(numeric.map((value, index) => ({index, value})));

// Add item. End of array
numeric.push(9, 10);
console.log({numeric});

// Add item. Other way
numeric = [...numeric, 15, 17];
console.log({numeric});

// Add item. First of array
numeric.unshift(100);
console.log({numeric});

// Remove item. End of array
numeric.pop();
console.log({numeric});

// Remove item. First of array
numeric.shift();
console.log({numeric});

// Remove 2 items from index 4
numeric.splice(4, 2);
console.log({numeric});

// Remove odd values from number 5 to 23
let filterOdd = numeric.filter(num => num % 2 === 0 || num < 5 || num > 23);
console.log({filterOdd});

// Remove even values from number 10 to 50
let filterEven = numeric.filter(num => num % 2 !== 0 || num < 10 || num > 50);
console.log({filterEven});

// Sort array by Descending
numeric.sort((a, b) => b - a);
console.log({numeric});

// Sort array by Ascending
numeric.sort((a, b) => a - b);
console.log({numeric});

// Count number of array
console.log("length array: ", numeric.length);






