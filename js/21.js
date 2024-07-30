// Arrow function
// Function Expression

const sumar2 = (n1, n2) => {
    console.log(n1 + n2);
}
sumar2(5, 10);


const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}
aprendiendo('JavaScript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Television 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 }
];

// forEach
meses.forEach((mes) => {
    if (mes === 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado = 0;
// Some ideal for arrays of objects
resultado = meses.some((producto) => {
    return producto.nombre === 'Celular';
});

resultado = carrito.reduce((total, producto) => {
    return total + producto.precio;
}, 0);

// Filter
resultado = carrito.filter((producto) => {
    return producto.precio > 400;
});

resultado = carrito.filter((producto) => {
    return producto.nombre !== 'Celular';
});
console.log(resultado);
