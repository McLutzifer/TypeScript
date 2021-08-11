// there are 3 basic types in TypeScript
let isDone: boolean = false;
let lines: number = 42;
let myName : string = "Anders"

// But you can omit the type annotation if the variables are derived
// from explicit literals
let isNotDone = false;
let numberOfLines = 42;
let anotherName = "Anders";

// When it's impossible to know, there is the "Any" type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;  // okay ,definitely a boolean

// Use const keyword for constants
const numLivesForCat = 9;
//numLivesForCat = 1 ... Error

// For collections, there are typed arrays and generic arrays
let list: number[] = [1, 2, 3];
// Alternatively, using the generic array type
let newList: Array<number> = [1, 2, 3];
let otherList: Array<string> = ['peter', 'paul', 'mary'];

// For enumerations:
enum Color { Red, Green, Blue };
let c: Color = Color.Green;

// Lastly, "void" is used in the special case of a function returning nothing
function bigHorribleAlert(): void {
    alert("I#m a little annoying box!");
}
}