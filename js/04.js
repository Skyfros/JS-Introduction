/* Types of values/data */
// String
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo"; // String
const producto2 = 'Monitor HD'; // String

console.log(tweet.length); // Monitor de 20 Pulgadas
console.log(producto2); // Monitor HD

// IndexOf devuelve la posición de la primera coincidencia de un valor en una cadena de texto.
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('Tablet')); // -1

// Includes devuelve true o false si un valor existe en una cadena de texto.
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('Tablet')); // false