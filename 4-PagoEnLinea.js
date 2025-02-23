function procesarPago(monto){
    return new Promise((resolve,reject)=>{
       
setTimeout(() => {
    if(monto>0){
        resolve("Pago exitoso de $"+monto)
    }else{
        reject("Error: Monto Inválido")
    }
    }, 2000);
        
    });
}
//Pago Exitoso
procesarPago(700).then((mensaje)=>{console.log(mensaje)
}).catch((error)=>{console.log(error);
})
//Monto Invalido


procesarPago(-1).then((mensaje)=>{console.log(mensaje)
}).catch((error)=>{console.log(error);
})
