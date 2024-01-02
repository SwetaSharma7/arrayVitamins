// 3. Get all items containing Vitamin A.

const items = require('./items');

const vitaminA = items.filter(item => item.contains.includes("Vitamin A"));
console.log("que:3", "Contains Vitamin A", vitaminA);