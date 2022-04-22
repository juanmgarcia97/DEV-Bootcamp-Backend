// function log(message: string, userId = "Not signed in") {
//   console.log(message, userId);
// }

// function log2(message: string, userId = "Not signed in") {
//   console.log(message, userId);
// }

// log("hola");

// Trying to do Rest parameters without rest parameters

// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// sum([1, 3, 2]);

// function sumVariadic(): number {
//   return Array.from(arguments).reduce((total, n) => total + n, 0);
// }

// REST PARAMETERS

// function sumVariadicSafe(intitalValue: number, ...numbers: number[]): number {
//   return Array.from(arguments).reduce((total, n) => total + n, intitalValue);
// }

// sumVariadicSafe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// function add(a: number, b: number) {
//   return a + b;
// }

// add(10, 20);
// add.apply(null, [10, 20]);
// add.call(null, 10, 20);
// add.bind(null, 10, 20); // Crea una nueva funcion, se pueden agregar parametros

// Tarea: entender y traer ejemplo practico del bind

// object definition
// const student1= {
//   name: "Jack",
//   introduction: function(score: number) {
//       console.log(this.name + "scored " + score + " in an exam.");
//   }
// }

// object definition 
// const student2= {
//   name: "Jimmy ",
// }

// using bind() method 
// let introduction= student1.introduction.bind(student2, 95);

// invoking introduction() function
// introduction();

// THIS

// let x = {
//   a() {
//     return this;
//   }
// }

// x.a();
// console.log(x.a());

// let a = x.a;
// a();

// console.log(a()); //undefined, por estas inconsistencias casi no se usa this

// Manera segura
// function fancyDate(this: Date) {
//   return `${this.getDate()} / ${this.getMonth()} / ${this.getFullYear()}`
// }

// fancyDate.call(new Date)

// GENERATORS

// function* createNumbers() {
//   let n = 0;
//   while(true) {
//     yield n++;  //yield = return + pausa del estado
//   }
// }


// function* generateFibonacci() {
//   let first = 0;
//   let second = 1;
//   let aux = 0;

//   while(true) {
//     yield first;
//     aux = first;
//     first = second;
//     second = aux + second;
//     // [first, second] = [second, first + second] //ES6 array destructuring
//   }
// }

// let numbers = generateFibonacci();
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());

// ITERATORS

// let numbers = {
//   *[Symbol.iterator]() {
//     for (let n = 0; n <= 10; n++) {
//       yield n;
//     }
//   }
// }

// console.log(numbers);

// for(let a of numbers) {
//   console.log(a);
  
// }

// let allNumbers = [...numbers];

// console.log(allNumbers);

// let [one, two, ...rest] = numbers
// console.log(allNumbers);

// FUNCTIONS

// function sum(a: number, b: number): number {
//   return a + b;
// }

// type myFun = (a: number, b: number) => number

// type Log = (message: string, userId?: string) => void

// type Log2 = {
//   (message: string, userId?: string): void
// }

// OVERLOADED FUNCTIONS

// class Reservation {
//   constructor(private from: Date, private to: Date | string, private destination?: string)
//   {
    
//   }
// }
// call signature
// type Reserve = {
//   (form: Date, to: Date, destination: string): Reservation
//   (form: Date, destination: string): Reservation
// }
// bug, retorna lo que
// let reserve: Reserve = (from: Date, to: Date | string, destination?: string): Reservation => {
//   return new Reservation(from, to, destination);
// }

// let myReservation = reserve(new Date(), new Date(), 'EEUU');
// let myReservation2 = reserve(new Date(), 'EEUU');
// let myReservation3 = reserve(new Date(), 'EEUU');

