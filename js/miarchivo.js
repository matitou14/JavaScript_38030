// debugger
// login My Cargo

/*
// Opcion de consulta antes de empezar el proceso de carga (util para ver destino/nombre transporte)

function consultar (){ 
    let transporte = prompt("Ingrese el numero de transporte");
    alert("El numero corresponde al Tte PEPE con destino a Cordoba")
}

consultar()


function ejecutar(){
    let transporte = prompt("Ingrese el numero de transporte");
  if (transporte == false){
      alert("Ingrese un numero de transporte");
    transporte = prompt("Ingrese el numero de transporte"); // No muestra alert
}else if (transporte >=1){
      alert("Iniciando proceso de carga"); // DEBERIA GENERARSE UN PRINT DE LA HORA EN 
}                                          // QUE SE INICIA LA CARGA (backend)
}
 ejecutar()

  // GESTIONAR CARGA


  
function inicioCarga(){
    let iniciarCarga = confirm("Desea iniciar la carga");  
   while(iniciarCarga){
       alert("Iniciando proceso de carga");  
       break
   }if (iniciarCarga == false){
    confirm("¿desea cancelar?");
    alert("Cancelado por usuario");
}
}

    inicioCarga()



    function finCarga(){
     finCarga = confirm("Fin de carga");  
       while(finCarga){
           alert("Fin proceso de carga");
           break
        }if (finCarga == false){
            confirm("¿desea cancelar?");
            alert("Cancelado por usuario");
        }
    }
        finCarga()*/

// alert("Bienvenido a My cargo");
// function login() {
//   let usuario = prompt("Ingrese su expedicion");
//   while (usuario === "" || usuario === null) {
//     usuario = prompt("Ingrese su expedicion");
//   }
// }
// login();

class Transporte {
  constructor(numeroTte, nombre, chofer, capacidad, destino) {
    this.numeroTte = numeroTte;
    this.nombre = nombre;
    this.chofer = chofer;
    this.capacidad = capacidad;
    this.destino = destino;
    this.capacidadCarga = function (pallets) {
      this.capacidad = this.capacidad - pallets;
    };
  }
}

const transportes = [];
transportes.push(
  new Transporte(1234, "Logistica Pepe", "tito gomez", 26, "Cordoba")); // la sentencia new es para crear
transportes.push(
  new Transporte(12345, "Logi trans", "Matias Gomez", 30, "Buenos Aires")); // una nueva copia de la funcion constructora
transportes.push(
  new Transporte(123456, "TransVader", "Tony Gomez", 28, "Concordia"));
transportes.push(
  new Transporte(1234567, "Transporte Messi", "Lionel Gomez", 28, "Bariloche"));
//  for(const transporte of transportes){
    // console.log(`El transporte ${transporte.nombre} tiene una capacidad de ${transporte.capacidad} pallets`);
//  }

function capacidadCarga() {
  let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
  let pallets = parseInt(prompt("Ingrese la cantidad de pallets"));
  let transporte = transportes.find(
    (transporte) => transporte.numeroTte == numeroTte
  );
  transporte.capacidadCarga(pallets);
  console.log(
    `Al transporte ${transporte.nombre} le quedan ${transporte.capacidad} lugares vacios`
  );
}

//capacidadCarga();

function grabarCarga() {
  let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
  let hora = new Date().toLocaleTimeString();
  confirm("Desea iniciar la carga");
  console.log(`La carga ha comenzado a las ${hora}`);
}

// grabarCarga();

function grabaFinCarga() {
  let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
  let hora = new Date().toLocaleTimeString();
  console.log(`La carga ha finalizado a las ${hora}`);
}
//grabaFinCarga()

