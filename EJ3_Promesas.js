/*
Ejercicio 3: Verificación de Stock en una Tienda
Equipo 4
Crea una función verificarStock(producto, cantidad) que devuelva una promesa.
Si el producto existe en inventario y la cantidad está disponible, la promesa se
 resuelve con "Stock disponible, procediendo con la compra".
Si no hay suficiente stock, la promesa se rechaza con "Stock insuficiente".
Considere el siguiente objeto para hacer las búsquedas:
let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 }; 
*/

// el objeto de la tienda
let inventario = { "laptop": 5, "mouse": 10, "teclado": 0 };

// Función con los parametros de producto y cantidad
function verificarStock(producto, cantidad) {
  return new Promise((resolve, reject) => {//colocamos el resolve y el reject
    // Verificamos si el producto existe en el inventario
    if (inventario.hasOwnProperty(producto)) {
      // Si existe, verificamos si hay suficiente stock
      if (inventario[producto] >= cantidad) {
        resolve("Stock disponible, procediendo con la compra");
      } else {
        reject("Stock insuficiente");
      }
    } else {
      // Si el producto no existe en el inventario
      reject("Producto no encontrado en el inventario");
    }
  });
}

// Uso
//ejemplo con stock y producto disponible
verificarStock("laptop", 3)
  .then((mensaje) => console.log(mensaje))//Stock disponible, procediendo con la compra
  .catch((error) => console.error(error));
//e jemplo sin stock
verificarStock("mouse", 15)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error)); // Stock insuficiente
//ejemplo sin prodcuto
verificarStock("monitor", 2)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error)); // Producto no encontrado en el inventario