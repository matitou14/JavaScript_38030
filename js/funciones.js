//debugger
// login My Cargo 


// alert("Bienvenido a My cargo");
// function login(){
// let usuario = prompt("Ingrese su expedicion");
// while(usuario === "" || usuario === null){
//     usuario = prompt("Ingrese su expedicion");
// }
// }   
// //login()


// Opcion de consulta antes de empezar el proceso de carga (util para ver destino/nombre transporte)

// function consultar (){ 
//     let transporte = prompt("Ingrese el numero de transporte");
//     alert("El numero corresponde al Tte PEPE con destino a Cordoba")
// }

// consultar()


// function ejecutar(){
//     let transporte = prompt("Ingrese el numero de transporte");
//   if (transporte == false){
//       alert("Ingrese un numero de transporte");
//     transporte = prompt("Ingrese el numero de transporte"); // No muestra alert
// }else if (transporte >=1){
//       alert("Iniciando proceso de carga"); // DEBERIA GENERARSE UN PRINT DE LA HORA EN 
// }                                          // QUE SE INICIA LA CARGA (backend)
// }
//   ejecutar()

  // GESTIONAR CARGA


  
// function inicioCarga(){
//     let iniciarCarga = confirm("Desea iniciar la carga");  
//    while(iniciarCarga){
//        alert("Iniciando proceso de carga");  
//        break
//    }if (iniciarCarga == false){
//     confirm("¿desea cancelar?");
//     alert("Cancelado por usuario");
// }
// }

//     // inicioCarga()



//     function finCarga(){
//      finCarga = confirm("Fin de carga");  
//        while(finCarga){
//            alert("Fin proceso de carga");
//            break
//         }if (finCarga == false){
//             confirm("¿desea cancelar?");
//             alert("Cancelado por usuario");
//         }
//     }
//         //finCarga()

class expediciones {
    constructor(nombre, cargaInicial, cargaFinal , horaInicio, horaFin) {
        this.nombre = nombre;
        this.cargaInicial = cargaInicial
        this.cargaFinal = cargaFinal
        this.horaInicio = horaInicio
        this.horaFin = horaFin
        this.cargaTotal = function(pallets){
        this.cargaFinal = this.cargaFinal + pallets
        }
      } 
}

const expedicion = [];
expedicion.push(new expediciones("Exp Dulceria", 0, 0, "", ""));
expedicion.push(new expediciones("Exp PF", 0, 0, "", ""));
expedicion.push(new expediciones("Exp UAT", 0, 0, "", ""));
expedicion.push(new expediciones("Exp Queseria", 0, 0, "", ""));

function verExpediciones (){
  expedicion.forEach(expediciones => console.table (`Las expediciones activas son  ${expediciones.nombre}`))
}

//verExpediciones()

