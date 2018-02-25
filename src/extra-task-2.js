/*

  Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array.

  (*) The returned inventory array should be in alphabetical order by item.

*/
function updateInventory(arr1, arr2) {
    const map1 = new Map(arr1.map(elem => elem.reverse()));
    const map2 = new Map(arr2.map(elem => elem.reverse()));
    for (const entity of map2) {
        if (map1.has(entity[0])) {
            map1.set(entity[0], map1.get(entity[0]) + entity[1]);
        } else {
            map1.set(entity[0], entity[1]);
        }
    }
    arr1 = [...map1]
        .sort((a, b) => a[0] > b[0])
        .map(elem => elem.reverse());

    return arr1;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
