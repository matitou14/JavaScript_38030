const titulo = document.querySelector("#titulo");
titulo.innerText = "Login";


// DOM - Document Object Model

class expediciones {
  constructor(nombre) {
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
    new Transporte("1234", "Logistica Pepe", "987", "tito gomez", 26, "Cordoba")
  ); // la sentencia new es para crear
  transportes.push(
    new Transporte("12345", "Logi trans", "654", "Matias Gomez", 30, "Buenos Aires")); // una nueva copia de la funcion constructora
  transportes.push(
    new Transporte("123456", "TransVader", "321", "Tony Gomez", 28, "Concordia"));
  transportes.push 
  (new Transporte("1234567", "Transporte Messi", "123", "Lionel Gomez", 28, "Bariloche"));
  return transportes;
}


// FUNCIONES PARA GESTIONAR INICIO - FIN DE CARGA

function inicioCarga() {
  let horaIni = new Date().toLocaleTimeString();
  return horaIni;
}

const horaInicio = inicioCarga();


function finCarga() {
let horaFin = new Date().toLocaleTimeString();
return horaFin;
}

const horaFinal = finCarga ()

//EXPEDICIONES

let ingreseExpedicion;


function llamarExpe() {
  ingreseExpedicion = document.getElementById("nombreExpe").value;
  let listadoDeExpe = verExpediciones();
  let expedicionRetornada = listadoDeExpe.find(
    (expedicion) =>
      expedicion.nombre.toUpperCase() === ingreseExpedicion.toUpperCase()
  );
  console.log(expedicionRetornada);
  (expedicionRetornada) ? toastExpe (`Bienvenido ${expedicionRetornada.nombre }`, "success") : sa("No existe la expedición", "warning") };
  


const inputText = document.querySelector("#nombreExpe");
inputText.addEventListener("keydown", function teclado(tecla) {
  let codigo = tecla.keyCode;
  codigo === 13 ? llamarExpe() : "No existe expedicion";
});
const boton = document.querySelector("#btn__login");
boton.addEventListener("click", llamarExpe);


const sa = (mensaje,icon ) => {
  swal.fire ({
    title:mensaje,
    icon:icon,
    confirmButtonText: "ok",
  })

}

const toastExpe = (mensaje, icon) =>{
swal.fire({
 toast: true,
 icon: icon,
 text:mensaje,
 timer: 2000,
})
}
//TRANSPORTES 


let ingreseTte;


function llamarTte() {
  ingreseTte = document.getElementById("tranporteTte").value;
  let lista = muestraTransportes();
  let tteResultante = lista.find(
    (transportes) => transportes.numeroTte === ingreseTte
  );
  console.log(tteResultante);
 (tteResultante) ? toastExpe (`Inciando carga en ${tteResultante.nombre}`, "success") : sa("No existe el transporte", "error");}


const boton2 = document.querySelector("#btn__grabar__tte");
boton2.addEventListener("click", llamarTte);

const inputTextTte = document.querySelector("#tranporteTte");
inputTextTte.addEventListener("keydown", function teclado(tecla) {
  const codigo1 = tecla.keyCode;
  codigo1 === 13 ? llamarTte() : "error";
});

//SECTION CARGA

const sectionCarga = document.querySelector(".card__carga");

function mostrarCarga() {
 
sectionCarga.innerHTML = `<main class="index__section__carga">
<div class="btn__cargas">
<button id="btn__ini">Iniciar Carga </button>
<button id="btn__fin" >Finalizar Carga</button>
</div>
<div class="carga__pallets">
<label class="label__carga">Pallets cargados</label>
<input id="pallet__entero" class="input__carga" type="text"</input>


<label class="label__carga">Pallets picking</label>
<input id="pallet__picking" class= "input__carga"  type="text"></input>


<label class="label__carga">Pallets cortados</label>
<input id="pallets__cortados" class="input__carga" type="text" ></input>

</div>

<div class="btn__grabar__carga">
<button id="btn__grabar__all" class="btn__grabar" > Grabar</button>
<button>Cancelar</button>
</main>`;
}
mostrarCarga();

//CARD carga
document.querySelector(".card__carga").style.display = "block";

const cuantosPallets = document.querySelector("#pallet__entero");
const palletPicking = document.querySelector("#pallet__picking");
const palletCortados = document.querySelector("#pallets__cortados");
const nombreExpedicion = document.querySelector("#nombreExpe");
const nombreTransporte = document.querySelector("#tranporteTte"); 
const btnGrabaTodo = document.querySelector("#btn__grabar__all")
const iniCarga = document.querySelector("#btn__ini");
const finiCarga = document.querySelector("#btn__fin");


btnGrabaTodo.addEventListener("click", guardarPallets);
btnGrabaTodo.addEventListener("click", () => {
  Swal.fire({
    title: '¿Desea guardar la carga?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Guardado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Los cambios no se guardaron', '', 'info')
    }
  });
});


iniCarga.addEventListener("click", inicioCarga);
finiCarga.addEventListener("click", finCarga);
const infoCargas = [];
function guardarPallets (){
const cantidadesCargas = {
  palletsenteros: cuantosPallets.value,
  palletspicking: palletPicking.value,
  palletscortados: palletCortados.value,
}
 
const cargaDatos ={ 
  Expedicion: nombreExpedicion.value,
  Transporte: nombreTransporte.value,
  Pallets: cantidadesCargas,
  Inicio:horaInicio,
  Fin:horaFinal,
}

infoCargas.push(cargaDatos)
localStorage.setItem(`resumenCarga`, JSON.stringify(infoCargas))//guarda en el local storage

}

function recuperarDatos (){
  const datos = JSON.parse(localStorage.getItem(`resumenCarga`))//recupera los datos del local storage
  console.log(datos)
}	
recuperarDatos();









// const sectionConsulta = document.querySelector("#card__consulta");

// function mostrarConsulta (){
// sectionConsulta.innerHTML = `<main id="index__section__consulta">
// <div id="card__consulta"> 
// <h5 class="titulo__consulta">nombre tte</h5>
// <p class="parrafo__consulta2">entregas</p>
// <p class="parrafo__consulta3">chofer</p>
// <p class="parrafo__consulta4">destino</p>
// <p class="parrafo__consulta5">capacidad</p>
// </div>
// <button id="btn__consulta">volver</button>
// </main>`;

// }

// mostrarConsulta();

// let consultaTransoporte = document.querySelector("#btn__consulta");

// function consultarTransporte (){
//   ingreseTte = document.getElementById("floatingInput").value;
//   let lista = muestraTransportes();
//   let transporteConsultado = lista.find(
//     (transportes) => transportes.nroPedido === ingreseTte
//   );
//   console.log(transporteConsultado);
//   if (transporteConsultado) {
//      document.querySelector(".index__form__tte").style.display = "block";
//      document.querySelector("#index__section__consulta").style.display ="block"; 
//   sectionConsulta.innerHTML =
//      `<h5> ${transporteConsultado.nombre}</h>
//      <p> ${transporteConsultado.nroPedido}</p>
//      <p> ${transporteConsultado.chofer}</p>
//      <p> ${transporteConsultado.destino}</p>
//      <p> ${transporteConsultado.capacidad}</p>
//      `;
 
// } else {
//     document.getElementById("nro de pedido incorrecto").innerHTML =
//       "No existe el transporte";
//   }
// }

// const boton3 = document.querySelector("#consulta__tte");
// boton3.addEventListener("click", consultarTransporte);

// const finiCarga = document.querySelector(".btn__fin");
// finiCarga.addEventListener("click" , .value);
