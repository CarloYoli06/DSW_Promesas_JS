# EJERCICIOS JS PROMESAS

En esta actividad realizamos 7 ejercicios en JavaScript enfocado a la creacion y uso de promesas.
Dichos ejercicios los explicaremos a continuacion:                                                                                                

Ejercicio 1:
Este programa simula la verificacion del tamaño de una descarga. Dicha verificacion se simula con un if dentro
de la promesa y al momento de llamarla, se mandaban llamar resolve y reject para mostrar los datos.                                                                    

Ejercicio 2:
Este programa se enfoco a verificar la edad del usuario para realizar una compra, dicha verificacion se realizo de igual forma
con un if dentro de la promesa, esta validacion estaba que si la edad > 18, el resolve mandaba el mensaje de confirmacion, en caso
contrario, el reject mandaba mensaje de error          

Ejercicio 3:

Ejercicio 4:
El ejercicio consistía en crear una función  que devolviera una promesa para verificar si un producto tenía suficiente stock en un inventario simulado. Si el producto existía y había suficiente stock, la promesa se resolvía con un mensaje de confirmación; si no, se rechazaba indicando "Stock insuficiente" o "Producto no encontrado". La solución  utilizó Promise para manejar la lógica de resolución o rechazo, y se verificó la existencia del producto y la cantidad disponible en un objeto JavaScript que simulaba el inventario.

Ejercicio 5:
En este programa simula la autenticacion de un usuario al iniciar sesion, esta autenticacion se realiza por medio de un if
dentro de una promesa que se encarga de comparar el usuario con uno valido y la contraseña con una valida. Al llamar la promesa 
con el .then y resolve, debe mandar mensaje de confirmacion, en caso contrario pasara al .catch y reject y mandara mensaje de error.


Ejercicio 6:

Ejercicio 7: 
El ejercicio consistía en crear una función  que devolviera una promesa para consultar el clima de una ciudad en una base de datos local simulada. Si la ciudad existía, la promesa se resolvía con los datos del clima; si no, se rechazaba con un error. La solución  implicó usar Promise para manejar la resolución o el rechazo, y se simuló la base de datos con un objeto JavaScript tambien se utilizó hasOwnProperty para verificar la existencia de la ciudad en la base de datos.