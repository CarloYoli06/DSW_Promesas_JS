
function verificarEdad(edad) {
    return new Promise((resolve, reject) => {
        if (edad >= 18) {
            resolve("Compra permitida");
        } else {
            reject("Debes ser mayor de edad para comprar este producto");
        }
    });
}
// llamar la funcion verificarEdad
verificarEdad(17)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error)); 