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