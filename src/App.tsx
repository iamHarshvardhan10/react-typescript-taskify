//  typeScript
// creating string with typeScript
const name: string = "Harsh";

// creating nubmer with ts
const age: number = 21;

// creating boolean with ts
const isStudent: boolean = true;

// creating array of string
const hobbies: string[] = ["hello", "worlds"];

// creating array of different type
const role: [string, number] = ["hello", 23];

// creating object in ts
// let person : Object;

type Person = {
  name: string;
  age: number; // if property is you dont want to define in object then add ?  after property name
};

const person: Person = {
  name: "harsh",
  age: 12,
};
console.log(person);

// creating array of person object
let person1: Person[];
// console.log(person1)

// creating variable can expect multiple type using union operator
let number: number | string | boolean;
number = 12;
number = "harsh";
number = true;

// creating function in ts
// here void denote it will return anything
// we can also return never intead of void
// difference between void and never
// void return undefined
// never return nothing
// const numberFun = (num : number) => void

// never use any type in ts

// instead we can use unkown
// let personName : unknown;

// two type of aliases
// 1) type
// 2) interface

// ex: type
// type PersonType = {
//   perosnName : string,
//   number  : number
// }

//  ex : - inteface
// interface PersonType {
//   personName: string;
//   numebr: number;
// }

const App = () => {
  return (
    <div>
      <p>Name :- {name}</p>
      <p>age :- {age}</p>
      <p>Student :- {isStudent}</p>
      <p>hobbies :- {hobbies[0]}</p>
      <p>role :- {role}</p>
    </div>
  );
};

export default App;
