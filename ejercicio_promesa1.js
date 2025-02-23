
function descargarArchivo(tamaño){
    return new Promise((resolve, reject) => {
        if (tamaño <= 50) {
            resolve("Descarga completada");
        } else {
            reject("El archivo es demasiado grande");
        }
    });
}

descargarArchivo(10)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));

