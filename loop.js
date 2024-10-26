//LOOPS ASSIGNMENT
//1. Creating a Lesson Plan(Using for loop )
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lessonName = "lesson".concat(i);
    var lessonStatus = i % 2 === 0 ? false : true;
    myWork.push({ name: lessonName, status: lessonStatus });
}
console.log(myWork);
//2.Guessing Game (Using while loop)
var maxValue = 15;
var randomNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Random number:", randomNumber);
var correctGuesses = false;
var guesses = [3, 5, 7, 9, 7];
var index = 0;
while (!correctGuesses && index < guesses.length) {
    if (guesses[index] === randomNumber)
        console.log("congratulation ! You guessed the correct number", randomNumber);
    correctGuesses = true;
}
if (guesses[index] < randomNumber) {
    console.log("Too low ! Try again");
}
else {
    console.log("Too hugh! try again");
}
index++;
if (!correctGuesses) {
    console.log("Sorry, you've run out guesses. The corrcet number was", randomNumber);
}
//3.Counter Incrementer (Using do while loop )
var counter = 5;
var step = 8;
do {
    console.log("counter", counter);
    counter += step;
} while (counter < 100);
//4.Exploring Objects with for...in Loop.
var myObject = {
    item1: "Value1",
    item2: "Value2",
    item3: "Value3",
};
for (var property in myObject) {
    if (myObject.hasOwnProperty(property)) {
        console.log("$(property);".concat(myObject[property]));
    }
}
//5.Exploring Arrays with Loops(Using loop ).
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log("Array", myArray);
console.log("USING FOR LOOP");
for (var i = 0; i < myArray.length; i++) {
    console.log("Index ".concat(i, ":").concat(myArray[i]));
}
console.log("USING FOR...OF LOOP");
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log(value);
}
