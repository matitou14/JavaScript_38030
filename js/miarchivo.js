// debugger
// login My Cargo


// Opcion de consulta antes de empezar el proceso de carga (util para ver destino/nombre transporte)


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



alert("Bienvenido a My cargo");
function login() {
  let usuario = prompt("Ingrese su expedicion");
  while (usuario === "" || usuario === null) {
    usuario = prompt("Ingrese su expedicion");
  }
}
// login();

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

function verTransportes() {
  transportes.forEach((Transporte) =>
    console.log(
      `El transporte ${Transporte.nombre} tiene una capacidad de ${Transporte.capacidad} pallets`
    )
  );
}

//verTransportes()

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

// BOTONES PARA GESTIONAR INICIO - FIN DE CARGA
function inicioCarga() {
  let iniciarCarga = confirm("Desea iniciar la carga");
  let hora = new Date().toLocaleTimeString();
  while (iniciarCarga) {
    alert(`La carga ha comenzado a las ${hora}`);
    break;
  }
  if (iniciarCarga == false) {
    confirm("¿desea cancelar?");
    alert("Cancelado por usuario");
  }
}

//inicioCarga()

function finCarga() {
  let finCarga = confirm("Fin de carga");
  let hora = new Date().toLocaleTimeString();
  while (finCarga) {
    alert(`La carga ha finalizado a las ${hora}`);
    break;
  }
  if (finCarga == false) {
    confirm("¿desea cancelar?");
    alert("Cancelado por usuario");
  }
}
//finCarga()

// FUNCION PARA VERIFICAR TRANSPORTE Y DESTINO (BOTON BUSQUEDA)

function buscarPedido() {
  let nroPedido = parseInt(prompt("Ingresa el numero de entrega"));
  let entrega = transportes.find(
    (transporte) => transporte.nroPedido === nroPedido
  );
  {
    console.table(
      `La entrega ${nroPedido} pertenece a ${entrega.nombre} con destino a ${entrega.destino}`
    );
  }
}
//buscarPedido()

class expediciones {
  constructor(nombre, cargaFinal) {
    this.nombre = nombre;
    this.cargaFinal = cargaFinal;
    }
  }

const expedicion = [];
expedicion.push(new expediciones("Exp Dulceria", 0,));
expedicion.push(new expediciones("Exp PF", 0,));
expedicion.push(new expediciones("Exp UAT", 0,));
expedicion.push(new expediciones("Exp Queseria", 0,));

function verExpediciones() {
  expedicion.forEach((expediciones) =>
    console.log(`Las expediciones activas son  ${expediciones.nombre}`)
  );
}

//verExpediciones()

function calcularCarga() {
  let dulceria = parseInt(prompt("Ingrese la carga de la expedicion Dulceria"));
  let pf = parseInt(prompt("Ingrese la carga de la expedicion PF"));
  let uat = parseInt(prompt("Ingrese la carga de la expedicion UAT"));
  let queseria = parseInt(prompt("Ingrese la carga de la expedicion Queseria"));
  let sumaExpe = dulceria + pf + uat + queseria;
  console.log(sumaExpe);
}

//calcularCarga()
