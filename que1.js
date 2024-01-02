// 1. Get all items that are available 

const items = require('./items');

const available = items.filter(items => items.available);
console.log("que1", "Available Items", available);