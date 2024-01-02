//  2. Get all items containing only Vitamin C.

const items = require('./items');

const vitaminC = items.filter(item => item.contains === "Vitamin C");

console.log('que 2', 'Contains Vitamin C', vitaminC);