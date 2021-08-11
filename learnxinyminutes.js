// there are 3 basic types in TypeScript
var isDone = false;
var lines = 42;
var myName = "Anders";
// But you can omit the type annotation if the variables are derived
// from explicit literals
var isNotDone = false;
var numberOfLines = 42;
var anotherName = "Anders";
// When it's impossible to know, there is the "Any" type
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay ,definitely a boolean
// Use const keyword for constants
var numLivesForCat = 9;
//numLivesForCat = 1 ... Error
// For collections, there are typed arrays and generic arrays
var list = [1, 2, 3];
// Alternatively, using the generic array type
var newList = [1, 2, 3];
var otherList = ['peter', 'paul', 'mary'];
// For enumerations:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert() {
    alert("I'm a little annoying box!");
}
// Functions are first class citizens, support the lambda "fat arrow"
// syntax and use type inference
// The following are equivalent, the same signature will be inferred by the 
// compiler, and same JavaScript will be emitted
var f1 = function (i) { return i * i; };
// Return type inferred
var f2 = function (i) { return i * i; };
// "Fat arrow" syntax
var f3 = function (i) { return i * i; };
// "Fat arrow" syntax with return type inferred
var f4 = function (i) { return i * i; };
// "Fat arrow"syntax with return type inferred, braceless means no return
// keyword needed
var f5 = function (i) { return i * i; };
// Object that implements the "Person" interface
// Can be treated as a person since it has the name and move properties
var p = { name: "Bobby", move: function () { } };
