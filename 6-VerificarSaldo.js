
var transaction=new Object();
transaction.cuenta="";
transaction.saldoRestante=0;
transaction.mensaje=""


function verificarSaldo(cuenta,monto){
    return new Promise ((resolve,reject)=>{
    setTimeout(() => {
       
            if(monto<=cuenta){
                transaction.cuenta=cuenta,
                transaction.saldoRestante=cuenta-monto,
                transaction.mensaje="Transacción aprobada"
                resolve(
                   transaction
                )
            }
            else{
                transaction.cuenta=cuenta,
                transaction.saldoRestante=cuenta
                transaction.mensaje="error: Fondos Insuficientes\nSaldo disponible: "+cuenta+"\nCodigo: 402"
                reject(
                    transaction
                )
            }
    
    
        })
    }, 2000);
  
}
//Aprobada
verificarSaldo(1000,700).then((mensaje)=>{console.log(mensaje)
}).catch((error)=>{console.log(error);
})

//Rechazada

verificarSaldo(10,700).then((mensaje)=>{console.log(mensaje)
}).catch((error)=>{console.log(error);
})