var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, ...array];

  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var newArray = array.unshift(element);

  return array;
}

function addElementToEndOfArray(array, element) {
  var newArray = [...array, element];

  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newArray = array.push(element);

  return array;
}

function accessElementInArray(array, index) {
  var word = array[index];

  return word;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var newArray = array.shift();

  return newArray;
}

function removeElementFromBeginningOfArray(array) {
  var newArray = array.slice(1);

  return newArray;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var newArray = array.pop();

  return array;
}

function removeElementFromEndOfArray(array) {
  var newArray = array.slice(0, array.length - 1);

  return newArray;
}
