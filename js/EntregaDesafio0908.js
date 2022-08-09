// //  const tte1 = new Transporte("Logistica Pepe", "tito gomez", 26, "Cordoba"); // la sentencia new es para crear 
// //  const tte2 = new Transporte("Logi trans", "Matias Gomez", 30, "Buenos Aires");  // una nueva copia de la funcion constructora
// //  const tte3 = new Transporte("TransVader", "Tony Gomez",28, "Concordia" );
// //  const tte4 = new Transporte("Transporte Messi", "Lionel Gomez",28, "Bariloche");
// // debugger
// // ARRAYS
// // DECLARACION DE ARRAYS | length = cantidad total de elementos|
// // const paises = ["Argentina", "Brasil", "Chile", "Uruguay", "Paraguay", "Inglaterra"];
// // for(let index = 0; index < paises.length; index++){
// // //     // paises.push("España"); //agregar un elemento al array (push) en la ultima posicion; //agregar un elemento al array (unshift) en la primera posicion
// // //     // paises.unshift("España"); //agregar un elemento al array (unshift) en la primera posicion; //agregar un elemento al array (push) en la ultima posicion
// // //     console.log(paises[index]);

// //      //usamos pop para eliminar el ultimo elemento del array
// //     //usamos shift para eliminar el primer elemento del array


// // function agregaPais(){
// //     let nuevoPais = prompt("Ingrese el nuevo pais");
// //     paises.push(nuevoPais);
// // }


// // // agregaPais();

// // function eliminaPais(){
// //     let rajaPais = parseInt(prompt("Ingrese pais a quitar"));
// //     let indice = paises.indexOf(rajaPais);
// //     let resultado = paises.splice(indice, 1);
// //     console.warn("Se ha eliminado el pais: " + resultado);
// // }
// // eliminaPais()
// // join = unir los elementos del array en una cadena de texto ej " - " etc

// // concat = combina los elementos del array en una cadena de texto.

// // const perros = ["Pupy" , "Rocky"]
// // const gatos = ["Godzilla", "catubela", "masto"]
// // const mascotas = perros.concat(gatos);
// // console.log(mascotas);

// // // slice = extrae una parte del array y lo devuelve en un nuevo array
// // const nombres = ["rita", "Pedro", "Marcos","Joaquin"]
// // const masculinos = nombres.slice(2 ,3, 4 );
// // console.log(masculinos);

// // INDEXOF = devuelve la posicion del elemento en el array
// // sort = ordena los elementos del array alfabéticamente

// // ARRAYS DE OBJETOS


// class Transporte {
//         constructor(numeroTte, nombre, chofer, capacidad, destino) {
//             this.numeroTte = numeroTte;
//             this.nombre = nombre;
//             this.chofer = chofer;
//             this.capacidad = capacidad;
//             this.destino = destino;
//             this.capacidadCarga = function (pallets) {
//                 this.capacidad = this.capacidad - pallets;
//             };
//         }
//     }

//     const transportes = [] 
//     transportes.push(new Transporte(1234, "Logistica Pepe", "tito gomez", 26, "Cordoba")); // la sentencia new es para crear 
//     transportes.push(new Transporte(12345,"Logi trans", "Matias Gomez", 30, "Buenos Aires"));  // una nueva copia de la funcion constructora
//     transportes.push(new Transporte(123456,"TransVader", "Tony Gomez",28, "Concordia" ));
//     transportes.push(new Transporte(1234567,"Transporte Messi", "Lionel Gomez",28, "Bariloche"));
// // for(const transporte of transportes){
// //     console.log(`El transporte ${transporte.nombre} tiene una capacidad de ${transporte.capacidad} pallets`);
// // }
// debugger
// function capacidadCarga(){
//     let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
//     let pallets = parseInt(prompt("Ingrese la cantidad de pallets"));
//     let transporte = transportes.find(transporte => transporte.numeroTte == numeroTte);
//     transporte.capacidadCarga(pallets);
//     console.log(`Al transporte ${transporte.nombre} le quedan ${transporte.capacidad} lugares vacios`);
// }

// // capacidadCarga();

// function grabarCarga(){
//     let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
//     let hora = new Date().toLocaleTimeString()
//     confirm("Desea iniciar la carga")
//     console.log(`La carga ha comenzado a las ${hora}`);
   
// }


// // grabarCarga()

//     function grabaFinCarga(){
//         let numeroTte = parseInt(prompt("Ingrese el numero de transporte"));
//         let hora = new Date().toLocaleTimeString()
//         console.log(`La carga ha finalizado a las ${hora}`);
       
//     }
//     //grabaFinCarga()