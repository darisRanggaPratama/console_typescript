let laptop: string[] = ["Lenovo", "HP", "Dell", "Fujitsu", "Asus", "Apple", "MSI", "Acer"];

// Add item. End of array
laptop.push("Toshiba");
console.log({laptop});

// Add item. Other way
laptop = [...laptop, "Axioo"];
console.log({laptop});

// Add item. First of array
laptop.unshift("Zyrex");
console.log({laptop});

// Display index array and value
console.log(laptop.map((value, index) => ({index, value})));

// Remove item. End of array
laptop.pop();
console.log({laptop});

// Remove item. First of array
laptop.shift();
console.log({laptop});

// Remove 2 items from index 4
laptop.splice(4, 2);
console.log({laptop});

// Display index array and value
console.log(laptop.map((value, index) => ({ index, value })));

// Remove odd index from index 1 to 3
let filterIndexOdd = laptop.filter((value, index) => index % 2 === 0 || index < 1 || index > 3);
console.log({ filterIndexOdd });


// Remove even index from index 1 to 4
let filterIndexEven = laptop.filter((value, index) => index % 2 !== 0 || index < 1 || index > 4);
console.log({ filterIndexEven });

// Sort array by Ascending
laptop.sort();
console.log({laptop});

// Sort array by Descending
laptop.sort((a, b) => b.localeCompare(a));
console.log({laptop});

// Count number of array
console.log(laptop.length);





