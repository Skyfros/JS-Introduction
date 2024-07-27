// Arrays

const numeros = [10, 20, 30, 40, 50];
console.table(numeros); // Imprime los valores del array

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses); // Imprime los valores del array
/* 
// Access to elements in an array
console.log(numeros[4]); // Acceso a un elemento del array
console.log(numeros[2]); // Acceso a un elemento del array
console.log(numeros[200]);

// Know the length of an array
console.log(meses.length);

numeros.forEach(function (numero) {
    console.log(numero);
});
*/

// Adding elements to an array
numeros.push(60); // Add a new element to the end of the array
numeros.unshift(-10, -20, -30); // Add a new element to the beginning of the array

console.table(numeros);

// Delete elements from an array
/* 
meses.pop(); // Delete the last element of the array
meses.shift(); // Delete the first element of the array


meses.splice(2, 1); // Delete an element from the array

console.table(meses);
 */
// Rest and spread operators
const nuevoArreglo = [...meses, 'Junio'];
console.table(nuevoArreglo);