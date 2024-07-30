// Function Definition
function sumar(numero1 = 0, numero2 = 0) { // Parameters
    console.log(numero1 + numero2);
}

sumar(10, 5); // Arguments
sumar(3, 3);
sumar(3, 6);
sumar(1);

// Function Expression
const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}

sumar2(5, 10);