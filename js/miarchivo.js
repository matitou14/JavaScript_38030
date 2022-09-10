const titulo = document.querySelector("#titulo");
titulo.innerText = "Login";



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
  );
  transportes.push(
    new Transporte("12345", "Logi trans", "654", "Matias Gomez", 30, "Buenos Aires")); // una nueva copia de la funcion constructora
  transportes.push(
    new Transporte("123456", "TransVader", "321", "Tony Gomez", 28, "Concordia"));
  transportes.push 
  (new Transporte("1234567", "Transporte Messi", "123", "Lionel Gomez", 28, "Bariloche"));
  return transportes;
}

const loadingFork = () => {
  return `<img src="./img/gif/final-comp-unscreen.gif" width="50%">`;
    }



//EXPEDICIONES

let exp = []
    fetch(`js/expediciones.json`)
  .then((response) => response.json())
  .then((data) => exp = data)
  .catch((error) => { sa("Error:", error) })

 


let ingreseExpedicion;


function llamarExpe() {
  ingreseExpedicion = document.getElementById("nombreExpe").value;
  let listadoDeExpe = exp;
  console.log(listadoDeExpe);
  let expedicionRetornada = listadoDeExpe.find((expedicion) => 
    expedicion.nombre.toUpperCase() === ingreseExpedicion.toUpperCase()
  ); 
  console.log(expedicionRetornada);
  (expedicionRetornada) ? toastExpe (`Bienvenido ${expedicionRetornada.nombre }`, "success") : sa("No existe la expedición", "warning")   
 
  let loading = document.querySelector("#loading");
  loading.innerHTML = loadingFork();
  setTimeout(() => {
    let loading = document.querySelector("#loading").style.display = "none";
    
   }, 4000);
   
    setTimeout(() => {
   
      document.querySelector(".index__form__tte").style.display =""; 
        }, 4000);
 
  document.querySelector(".index__section__login").style.display = "none";
};

const inputText = document.querySelector("#nombreExpe");
inputText.addEventListener("keydown", function teclado(tecla) {
  let codigo = tecla.keyCode;
  codigo === 13 ? llamarExpe() : "No existe expedicion";
})
const boton = document.querySelector("#btn__login");
boton.addEventListener("click", llamarExpe);
const inputTextExpe = document.querySelector("#nombreExpe");
boton.addEventListener("click", () => {
if (inputText.value === "") {
  sa("Ingrese Expedicion", "warning");
} else {
  return llamarExpe (); }});




const sa = (mensaje,icon ) => {
  swal.fire ({
    title:mensaje,
    icon:icon,
  })

}

const toastExpe = (mensaje, icon) =>{
swal.fire({
 toast: true,
 showConfirmButton: false,
 icon: icon,
 text:mensaje,
 timer: 1000, 
})
}
const toastExpecarga = (mensaje, icon, bgcolor) =>{
  swal.fire({
   toast: true,
   icon: icon,
   text:mensaje,
   showConfirmButton: false,
   allowEnterKey: true,
   timer: 1000, 
   position: "top-right",
  background: bgcolor,
   color: "white"})
  }

  toastTransp = (mensaje, icon) =>{
    swal.fire({
      icon: icon,
      text:mensaje,
      showConfirmButton: true, 
      allowEnterKey: true,})
     };


//TRANSPORTES (formualario para cargar los transportes)

document.querySelector(".index__form__tte").style.display = "none";
let ingreseTte;


function llamarTte() {
  ingreseTte = document.getElementById("transporteTte").value;
  let lista = muestraTransportes();
  let tteResultante = lista.find(
    (transportes) => transportes.numeroTte === ingreseTte
  );
  console.log(tteResultante);
 (tteResultante) ? toastExpe (`Inciando carga en ${tteResultante.nombre}`, "success") : sa("No existe el transporte", "error");
 
 let loading = document.querySelector("#loading").style.display = "";
 loading.innerHTML = loadingFork();
 
 setTimeout(() => {
  let loading = document.querySelector("#loading").style.display = "none";
  
  
}, 4000);
  
   setTimeout(() => {
  
    document.querySelector(".card__carga").style.display = "";
       }, 4000);

       document.querySelector(".index__form__tte").style.display = "none";

}


const boton2 = document.querySelector("#btn__grabar__tte");
boton2.addEventListener("click", llamarTte);

const inputTextTte = document.querySelector("#transporteTte");
inputTextTte.addEventListener("keydown", function teclado(tecla) {
  const codigo1 = tecla.keyCode;
  codigo1 === 13 ? llamarTte() : "error";
});

// const boton4 = document.querySelector("#btn___restablecer")
// boton4.addEventListener("click", llamarTte); 

//SECTION CARGA (en esta section se guardan los datos de la carga, inicio y fin de carga)

const sectionCarga = document.querySelector(".card__carga");

function mostrarCarga() {

sectionCarga.innerHTML = `<main class="index__section__carga">
<div class="btn__cargas">
<button class="btn__styles" id="btn__preset">Transporte en expedicion</button>
<button class="btn__styles" id="btn__ini">Iniciar Carga </button>
<button class="btn__styles" id="btn__fin" >Finalizar Carga</button>
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
<button class="btn__styles__grabar" id="btn__grabar__all" class="btn__grabar" > Grabar</button>

</main>`;


}
mostrarCarga();

// FUNCIONES PARA GESTIONAR INICIO - FIN DE CARGA

function inicioCarga() {
  let horaIni = new Date().toLocaleTimeString();
  (horaIni) ? toastExpecarga (`Iniciando carga`, "success", "red") : sa("No existe el transporte", "error");
  return horaIni;
}



function finCarga() {
let horaFin = new Date().toLocaleTimeString();
(horaFin) ? toastExpecarga(`Finalizando carga`, "success", "red") : sa("No existe el transporte", "error");
return horaFin;
}




document.querySelector(".card__carga").style.display = "none";


const cuantosPallets = document.querySelector("#pallet__entero");
const palletPicking = document.querySelector("#pallet__picking");
const palletCortados = document.querySelector("#pallets__cortados");
const nombreExpedicion = document.querySelector("#nombreExpe");
const nombreTransporte = document.querySelector("#transporteTte"); 
const btnGrabaTodo = document.querySelector("#btn__grabar__all")
const iniCarga = document.querySelector("#btn__ini");
const finiCarga = document.querySelector("#btn__fin");



btnGrabaTodo.addEventListener("click", () => {
  Swal.fire({
    title: '¿Desea guardar la carga?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    denyButtonText: `No guardar`,
  }).then((result) => {

    if (result.isConfirmed) {
      Swal.fire('Guardado!', '', 'success')
      document.querySelector(".card__carga").style.display = "none"
      document.querySelector(".index__form__tte").style.display = "";
      return guardarPallets();
    } else if (result.isDenied) {
      Swal.fire('Los cambios no se guardaron', '', 'info')
      document.querySelector(".card__carga").style.display = "none"
      document.querySelector(".index__form__tte").style.display = "";
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
  Inicio:inicioCarga(),
  Fin:finCarga(),
}

infoCargas.push(cargaDatos)
localStorage.setItem(`resumenCarga`, JSON.stringify(infoCargas))//guarda en el local storage

}

function recuperarDatos (){
  const datos = JSON.parse(localStorage.getItem(`resumenCarga`))//recupera los datos del local storage
  console.log(datos)
}	
recuperarDatos();



//CONSULTAS DE TRANSPORTES POR NUMERO DE PEDIDO (nombre, destino, capacidad)
let ttes = []

  fetch(`js/transportes.json`)
    .then((response) => response.json())
    .then((data) => ttes = data)
    .catch((error) => console(error));
    
  
let consultaTransporte;
function consultaTtee(){

consultaTransporte = document.querySelector("#transporteTte").value;
  console.log(consultaTransporte);
  const listaTransportes = ttes.find((tte) => tte.nroPedido === consultaTransporte);
 (listaTransportes) ? toastTransp (`Nombre: ${listaTransportes.nombre} 
                                   Destino: ${listaTransportes.destino} 
                                  Capacidad: ${listaTransportes.capacidad} pallets`, "info") : sa("Ingresa un número de pedido válido", "error");

}

const boton3 = document.querySelector("#consulta__tte");
boton3.addEventListener("click", consultaTtee);


