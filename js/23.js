const metodoPago = 'bitcoins';

switch (metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;

    case 'cheque':
        console.log('Seleccionaste pagar con cheque, revisaremos si tienes fondos');
        break;

    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;

    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo no soportado');
        break;
}