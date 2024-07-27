// "use strict"; // Use strict mode for better error handling
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto);// Freeze object to prevent changes.

Object.seal(producto);// Seal object to prevent new properties from being added or deleted but allows changing existing properties.


producto.precio = 'Nuevo Precio';
/* delete producto.precio; */
console.log(producto);