// 5. Sort items based on number of Vitamins they contain.

const items = require('./items');
const sortedItems = items.sort((a, b) => {
    const aVitamins = a.contains.split(', ').length;
    const bVitamins = b.contains.split(', ').length;
    return bVitamins - aVitamins;
});
console.log("que: 5. Sorted Items:", sortedItems);
