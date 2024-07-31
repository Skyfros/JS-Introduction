const usuarioAutenticado = new Promise((resolve,reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado'); // The promise is fulfilled
    }
    else {
        reject('No se pudo iniciar sesión'); // The promise is rejected
    }
});

usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));

// Promises have three states:
// - Pending: The promise is waiting for the result.
// - Fulfilled: The promise was successful.
// - Rejected: The promise was rejected