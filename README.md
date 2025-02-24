﻿# EJERCICIOS JS PROMESAS

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
El ejercicio consistía en crear una función  que devolviera una promesa para verificar si un producto tenía suficiente stock en un inventario simulado. Si el producto existía y había suficiente stock, la promesa se resolvía con un mensaje de confirmación; si no, se rechazaba indicando "Stock insuficiente" o "Producto no encontrado". La solución  utilizó Promise para manejar la lógica de resolución o rechazo, y se verificó la existencia del producto y la cantidad disponible en un objeto JavaScript que simulaba el inventario.

Ejercicio 4:
El proposito de este cuarto ejercicio era el poder simular un pago en linea en donde se tenia que ingresar el monto como parametro y se tenia que verificar si este era un monto valida, para ello utilizamos un promesa en la cual se comparaba el monto ingresado y si este era mayor que 0 se consideraba un monto valido y por ende resolvia regresando un mensaje de Pago exitoso, en caso contrario que el monto fuera menor que 0 se mandaba un mensaje de rechazo por parte de la promesa mencionando que el monto era invalido.

Ejercicio 5:
En este programa simula la autenticacion de un usuario al iniciar sesion, esta autenticacion se realiza por medio de un if
dentro de una promesa que se encarga de comparar el usuario con uno valido y la contraseña con una valida. Al llamar la promesa 
con el .then y resolve, debe mandar mensaje de confirmacion, en caso contrario pasara al .catch y reject y mandara mensaje de error.


Ejercicio 6:
Durante el este ejercicio se tenia la tematica de poder verificar un saldo de una cuenta bancaria, en la cual se tenia que poner la cuenta y el monto a retirar, para ello, se enviaron ambos parametros a una función la cual una vez dentro comparaba que si el monto era menor o igual a los fondo, la promesa se cumplia y se regresaba la información referente a la transacción mencionando cuanto saldo quedaba en la cuenta, por otro lado, si el monto era mayor que los saldos de la cuenta, la promesa se rechazaria dando un error de fondos insuficientes. Para devolver los datos una vez que la promesa se cumplia se hizo uso de un objeto llamado transaction donde se iban ingresando los datos correspondientos y alfinal se mandaba.

Ejercicio 7: 
El ejercicio consistía en crear una función  que devolviera una promesa para consultar el clima de una ciudad en una base de datos local simulada. Si la ciudad existía, la promesa se resolvía con los datos del clima; si no, se rechazaba con un error. La solución  implicó usar Promise para manejar la resolución o el rechazo, y se simuló la base de datos con un objeto JavaScript tambien se utilizó hasOwnProperty para verificar la existencia de la ciudad en la base de datos.
