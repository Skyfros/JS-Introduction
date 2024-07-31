// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

// Create a fuction that is only used in an specific object
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);
const producto4 = new Producto('Phone', 1200, true);
const producto5 = new Producto('PC', 1900, false);

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());
console.log(producto5.formatearProducto());

