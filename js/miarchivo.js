// login My Cargo

// Opcion de consulta antes de empezar el proceso de carga (util para ver destino/nombre transporte)

// function ejecutar(){
//     let transporte = prompt("Ingrese el numero de transporte");
//   if (transporte == ""){
//       alert("Ingrese un numero de transporte");
//     transporte = prompt("Ingrese el numero de transporte"); // No muestra alert
// }else if (transporte >=1){
//       alert("Iniciando proceso de carga"); // DEBERIA GENERARSE UN PRINT DE LA HORA EN
// }                                          // QUE SE INICIA LA CARGA (backend)
// }
//ejecutar()

//alert("Bienvenido a My cargo");
// function login() {
//   let usuario = [];
//   while (usuario === "" || usuario === null) {
//     usuario = prompt("Ingrese su expedicion");
//   }
// }
// login();

// function verTransportes() {
//   transportes.forEach((Transporte) =>
//     console.log(
//       `El transporte ${Transporte.nombre} tiene una capacidad de ${Transporte.capacidad} pallets`
//     )
//   );
// }

//verTransportes()

function capacidadCarga() {
  let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
  let pallets = parseInt(prompt("Ingrese la cantidad de pallets"));
  let transporte = transporte.find(
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
  let horaIni = new Date().toLocaleTimeString();
  while (iniciarCarga) {
    console.log(`La carga ha comenzado a las ${horaIni}`);
    break;
  }
  if (iniciarCarga == false) {
    confirm("¿desea cancelar?");
    console.log("Cancelado por usuario");
  }
}

//inicioCarga()

function finCarga() {
  let finCarga = confirm("Fin de carga");
  let horaFin = new Date().toLocaleTimeString();
  while (finCarga) {
    console.log(`La carga ha finalizado a las ${horaFin}`);
    break;
  }
  if (finCarga == false) {
    confirm("¿desea cancelar?");
    console.log("Cancelado por usuario");
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

// DOM - Document Object Model

class expediciones {
  constructor(nombre, cargaFinal) {
    this.nombre = nombre;
  }
}
function verExpediciones() {
  const expedicion = [];
  expedicion.push(new expediciones("Dulceria"));
  expedicion.push(new expediciones("PF"));
  expedicion.push(new expediciones("UAT"));
  expedicion.push(new expediciones("Queseria"));
  return expedicion;
}

function calcularCarga() {
  let dulceria = parseInt(prompt("Ingrese la carga de la expedicion Dulceria"));
  let pf = parseInt(prompt("Ingrese la carga de la expedicion PF"));
  let uat = parseInt(prompt("Ingrese la carga de la expedicion UAT"));
  let queseria = parseInt(prompt("Ingrese la carga de la expedicion Queseria"));
  let sumaExpe = dulceria + pf + uat + queseria;
  console.log(sumaExpe);
}

//calcularCarga()

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

function muestraTransportes() {
  const transportes = [];
  transportes.push(
    new Transporte("1234", "Logistica Pepe", 987, "tito gomez", 26, "Cordoba")
  ); // la sentencia new es para crear
  transportes.push(
    new Transporte(
      "12345",
      "Logi trans",
      654,
      "Matias Gomez",
      30,
      "Buenos Aires"
    )
  ); // una nueva copia de la funcion constructora
  transportes.push(
    new Transporte("123456", "TransVader", 321, "Tony Gomez", 28, "Concordia")
  );
  transportes.push(
    new Transporte(
      "1234567",
      "Transporte Messi",
      123,
      "Lionel Gomez",
      28,
      "Bariloche"
    )
  );
  return transportes;
}

const titulo = document.querySelector("#titulo");
titulo.innerText = "Login";
const inputText = document.querySelector("#nombreExpe");
inputText.addEventListener("keydown", function teclado(tecla) {
  let codigo = tecla.keyCode;
  codigo === 13 ? llamarExpe() : "error";
});

const boton = document.querySelector("#btn__login");
boton.addEventListener("click", llamarExpe);

let ingreseExpedicion;

function llamarExpe() {
  ingreseExpedicion = document.getElementById("nombreExpe").value;
  let listadoDeExpe = verExpediciones();
  let expedicionRetornada = listadoDeExpe.find(
    (expedicion) =>
      expedicion.nombre.toUpperCase() === ingreseExpedicion.toUpperCase()
  );
  console.log(expedicionRetornada);
  if (expedicionRetornada) {
    document.getElementById("tituloExpe").innerHTML = expedicionRetornada.nombre;
    document.querySelector(".index__section__login").style.display = "none";
    document.querySelector(".index__form__tte").style.display = "block"; 
    sectionCarga.innerHTML += `<h1 class="card__carga__titulo"> ${expedicionRetornada.nombre}</h1>`;
  } else {
    document.getElementById("tituloExpe").innerHTML = "No existe la expedicion";
  }
}

document.querySelector(".index__form__tte").style.display = "none";
let ingreseTte;
function llamarTte() {
  ingreseTte = document.getElementById("floatingInput").value;
  let lista = muestraTransportes();
  let tteResultante = lista.find(
    (transportes) => transportes.numeroTte === ingreseTte
  );
  console.log(tteResultante);
  if (tteResultante) {
    document.getElementById("tituloCarga").innerHTML = tteResultante.nombre;
    document.querySelector(".index__form__tte").style.display = "none";
    document.querySelector(".card__carga").style.display = "block";
    sectionCarga.innerHTML += `<h2 class= "card__carga__titulo"> ${tteResultante.nombre}, ${tteResultante.nroPedido}</h2>`;

  } else {
    document.getElementById("tituloCarga").innerHTML =
      "No existe el transporte";
  }
}


const boton2 = document.querySelector("#btn__grabar__tte");
boton2.addEventListener("click", llamarTte);

const inputTextTte = document.querySelector("#floatingInput");
inputTextTte.addEventListener("keydown", function teclado(tecla) {
  const codigo1 = tecla.keyCode;
  codigo1 === 13 ? llamarTte() : "error";
});

const sectionCarga = document.querySelector(".card__carga");



function mostrarCarga() {
  sectionCarga.innerHTML += `<main class="index__section__carga">
<div class="btn__cargas">
<button class="btn__ini">Iniciar Carga </button>
<button class="btn__fin" >Finalizar Carga</button>
</div>
<div class="carga__pallets">
<label class="label__carga">Pallets cargados</label>
<input class="input__carga" type="text"</input>
<button class="btn__carga">Grabar</button>

<label class="label__carga">Pallets picking</label>
<input id="pallet__picking" class= "input__carga"  type="text"></input>
<button id="btn__pic" class="btn__carga">Grabar</button>

<label class="label__carga">Pallets cortados</label>
<input id="pallets__cortados" class="input__carga" type="text" ></input>
<button id="btn__cort"  class="btn__carga">Grabar</button>
</div>

<div class="btn__grabar__carga">
<button class="btn__grabar__all"> Grabar</button>
<button>Cancelar</button>
</main>`;
}
mostrarCarga()





//CARD carga
// document.querySelector(".card__carga").style.display ="none"
const cuantosPallets = document.querySelector(".input__carga");
const palletPicking = document.querySelector("#pallet__picking");
const palletCortados = document.querySelector("#pallets__cortados");
const horaInicio = document.querySelector(".btn__ini");
const horaFin = document.querySelector(".btn__fin");

const btnGrabarPallets = document.querySelector(".btn__carga");
const btnGrabarPicking = document.querySelector("#btn__pic");
const btnGrabarCortados = document.querySelector("#btn__cort");
const btnGrabaTodo = document.querySelector(".btn__grabar__all");



btnGrabarPallets.addEventListener("click", guardarPallets);
// btnGrabarPicking.addEventListener("click", guardarPicking);
// btnGrabarCortados.addEventListener("click", guardarCortados);
// btnGrabaTodo.addEventListener("click", grabarTodo);



function guardarPallets() {
  localStorage.setItem("Pallets enteros", cuantosPallets.value);
  localStorage.setItem("Pallets picking", palletPicking.value)
  localStorage.setItem("Pallets cortados", palletCortados.value)
}

// function guardarPicking() {
//   localStorage.setItem("Pallets picking", palletPicking.value);
// }

// function guardarCortados() {
//   localStorage.setItem("Pallets cortados", palletCortados.value);
// }

function horaCarga() {
  localStorage.setItem("Hora de inicio", horaInicio);

}

const HoraJson = JSON.stringify(horaCarga());



// function grabarTodo() {

//   document.querySelector(".card__carga").style.display ="none"
// }

// const expedicion = [];
// expedicion.push(new expediciones("Dulceria"));
// expedicion.push(new expediciones("PF"));
// expedicion.push(new expediciones("UAT"));
// expedicion.push(new expediciones("Queseria"));
const iniCarga = document.querySelector(".btn__ini");
iniCarga.addEventListener("click", inicioCarga)




// const finiCarga = document.querySelector(".btn__fin");
// finiCarga.addEventListener("click" , .value);
// localStorage.setItem("finCarga", finCarga());