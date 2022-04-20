function log(message: string, userId = "Not signed in") {
  console.log(message, userId);
}

function log2(message: string, userId = "Not signed in") {
  console.log(message, userId);
}

log("hola");

// Trying to do Rest parameters without rest parameters

function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum([1, 3, 2]);

function sumVariadic(): number {
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}

// REST PARAMETERS

function sumVariadicSafe(intitalValue: number, ...numbers: number[]): number {
  return Array.from(arguments).reduce((total, n) => total + n, intitalValue);
}

sumVariadicSafe(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

function add(a: number, b: number) {
  return a + b;
}

add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20); // Crea una nueva funcion, se pueden agregar parametros

// Tarea: entender y traer ejemplo practico del bind
