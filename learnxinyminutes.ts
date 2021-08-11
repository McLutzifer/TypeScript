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
    alert("I'm a little annoying box!");
}

// Functions are first class citizens, support the lambda "fat arrow"
// syntax and use type inference

// The following are equivalent, the same signature will be inferred by the 
// compiler, and same JavaScript will be emitted
let f1 = function (i: number): number {return i * i; }
// Return type inferred
let f2 = function (i: number) {return i * i; }
// "Fat arrow" syntax
let f3 = (i: number): number => { return i * i; }
// "Fat arrow" syntax with return type inferred
let f4 = (i: number) => { return i * i; }
// "Fat arrow"syntax with return type inferred, braceless means no return
// keyword needed
let f5 = (i: number) => i * i;


// Interfaces are structural, anything that has the properties is
// compliant with the interface
interface Person {
    name: string;
    // optional properties, marked with a "?"
    age?: number;
    // And of course functions
    move(): void;
}

// Object that implements the "Person" interface
// Can be treated as a person since it has the name and move properties
let p: Person = { name: "Bobby", move: () => { } }
// Objects that have the optional property:
let validPerson: Person = { name: "Bobby", age: 42, move: () => { } };

// INterfaces can also describe a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}
// Only the parameters' types are important, names are not important.
let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    return src.search(sub) != -1;
}

// Classes - members are public by default
class Point {
    // Properties
    x: number;
}

