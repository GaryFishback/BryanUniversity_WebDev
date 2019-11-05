var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

/*
Remove the first item from the fruit array. Find the index of "orange."
Add that number to the end of the fruit array. [CHECK]

Remove the last item from the vegetable array.
Use the length property to find the length of the vegetable array.
Add that number to the end of the vegetable array.

Put the two arrays together into one array. Fruit first. Call the new Array "food".

Remove 2 elements from your new array starting at index 4 with one method.
Reverse your array.
Turn the array into a string and return it.*/
var food = [];

function arrayMethods(array1, array2) {
    array1.shift()
    var fruitIndex = fruit.indexOf("orange");
    array1.push(fruitIndex)

    array2.pop()
    var vegLength = vegetables.length;
    array2.push(vegLength)

    food = array1.concat(array2)
    food.splice(4, 2)
    food.reverse()
    return food

}

console.log(arrayMethods(fruit, vegetables)) ////3, pepper, 1, watermelon, orange, apple