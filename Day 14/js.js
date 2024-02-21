const array = [1, 2, 3, 4, 5];
const elementToFind = 3;
const foundElements = array.filter(element => element === elementToFind);
if (foundElements.length > 0) {
    console.log("Element found:", foundElements[0]);
} else {
    console.log("Element not found");
}

var object = {
    color:'black',
    height:'a',
    breed:'xyz'
} 
console.log(object.breed);
console.log(object.height);
console.log(object.breed);