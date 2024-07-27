const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

// Before destructuring
/* 
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto); // 300
console.log(nombreProducto); // Monitor 20 Pulgadas
 */
// Destructuring
const {precio, nombreProducto} = producto;

console.log(precio); // 300
console.log(nombreProducto); // Monitor 20 Pulgadas