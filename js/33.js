async function obtenerEmpleado() {
    const archivo = 'empleados.json';

    /* fetch(archivo)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const { empleados } = datos;
            console.log(empleados);
        });
 */

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleado();