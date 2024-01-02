// 4. Group items based on the Vitamins that they contain in the following format:
//         {
//             "Vitamin C": ["Orange", "Mango"],
//             "Vitamin K": ["Mango"],
//         }
        
//         and so on for all items and all Vitamins.

const items = require('./items');

const groupedItems = {};
items.forEach(item => {
    const vitamins = item.contains.split(', ');
    vitamins.forEach(vitamin => {
        if (!groupedItems[vitamin]) {
            groupedItems[vitamin] = [];
        }
        groupedItems[vitamin].push(item.name);
    });
});
console.log("4. Grouped Items:", groupedItems);




