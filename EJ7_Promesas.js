//Ejercicio 7: Consulta de Clima desde un "Servicio"
//Equipo 4
/*
Crea una función consultarClima(ciudad) que devuelva una promesa con el siguiente comportamiento:
Si la ciudad existe en una base de datos local, la promesa se resuelve con { ciudad, temperatura, condicion }.
Si la ciudad no existe, la promesa se rechaza con { error: "Ciudad no encontrada", codigo: 404 }.
*/

// Base de datos local de clima (simulada)
const baseDeDatosClima = {
    "Madrid": { temperatura: 22, condicion: "Soleado" },
    "Barcelona": { temperatura: 20, condicion: "Nublado" },
    "Manchester": { temperatura: 25, condicion: "Parcialmente nublado" },
    "Guadalajara": { temperatura: 30, condicion: "Despejado" }
  };    //creo un recurso para que pueda acceder a la base de datros simulada
  
  function consultarClima(ciudad) {
    return new Promise((resolve, reject) => {
      // Verificar si la ciudad existe en la BD
      //el has own busca como el elementode algo heredado
      if (baseDeDatosClima.hasOwnProperty(ciudad)) {
        // Si existe, resolver la promesa con los datos del clima,
        //en este caso se sigue el formato normal de la BD 
        const datosClima = {
          ciudad: ciudad,
          temperatura: baseDeDatosClima[ciudad].temperatura,
          condicion: baseDeDatosClima[ciudad].condicion
        };
        resolve(datosClima);
      } else {
        // Si no existe, rechazar la promesa con un mensaje de error
        reject({ error: "Ciudad no encontrada", codigo: 404 });
      }
    });
  }

  //ejemplo correcto
  consultarClima("Madrid")
    .then((clima) => {console.log("Clima encontrado:", clima);})
    .catch((error) => {console.error("Error:", error); });
  //error
  consultarClima("Monterrey")
    .then((clima) => {console.log("Clima encontrado:", clima); })
    .catch((error) => {console.error("Error:", error); });