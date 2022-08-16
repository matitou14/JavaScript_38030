
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






class Transporte {
  constructor(numeroTte, nombre, nroPedido, chofer, capacidad, destino) {
    this.numeroTte = numeroTte;
    this.nombre = nombre;
    this.nroPedido = nroPedido;
    this.chofer = chofer;
    this.capacidad = capacidad;
    this.destino = destino;
    this.capacidadCarga = function (pallets) {
      this.capacidad = this.capacidad - pallets;
    };
  }
}
function listaTransportes() {
const transportes = [];
transportes.push(
  new Transporte(1234, "Logistica Pepe", 987, "tito gomez", 26, "Cordoba")
); // la sentencia new es para crear
transportes.push(
  new Transporte(12345, "Logi trans", 654, "Matias Gomez", 30, "Buenos Aires")
); // una nueva copia de la funcion constructora
transportes.push(
  new Transporte(123456, "TransVader", 321, "Tony Gomez", 28, "Concordia")
);
transportes.push(
  new Transporte(
    1234567,
    "Transporte Messi",
    123,
    "Lionel Gomez",
    28,
    "Bariloche"
  )
);

  }

 class expediciones {
  constructor(nombre, cargaFinal) {
    this.nombre = nombre;
    this.cargaFinal = cargaFinal;
    }
  }
function verExpediciones() {
const expedicion = [];
expedicion.push(new expediciones("Dulceria", 0,));
expedicion.push(new expediciones("PF", 0,));
expedicion.push(new expediciones("UAT", 0,));
expedicion.push(new expediciones("Queseria", 0,));
return expedicion;
}
// function verExpediciones() {
  // expedicion.forEach((expediciones) =>
  //   console.log(`Las expediciones activas son  ${expediciones.nombre}`)
  // );
//}
