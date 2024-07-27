// Objects
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

/* 
console.log(producto);
console.log(producto.precio); // 300
console.log(producto['precio']); // 30
 */

// Agregar un nuevo campo
producto.imagen = 'imagen.jpg';

// Eliminar un campo
delete producto.disponible;

console.log(producto);