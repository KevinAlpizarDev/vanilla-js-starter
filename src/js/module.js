//VARIALES GLOBALES
let pendingTaskCounter = 0;

export const myFunctionsObject = {
// FIRST FUNCTION
  tasksCounter: function() {
    // Incrementa el contador cada vez que se llama a la función
    pendingTaskCounter++;
    let counter = document.getElementById("counter");
    counter.innerHTML = pendingTaskCounter;
  },
// SECOND FUNCTION
  currentDay: function () {
    
    let today = document.getElementById("today")
    
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    const d = new Date();
    console.log(d);
    let weekday = days[d.getDay()];
    const dayOfMonth = d.getDate();
    console.log(dayOfMonth);
    
    today.innerHTML = `Tasks for: ${weekday}`


  },

  // SUMA

sumar: function (a,b) {
  return a + b
},

/////////////// MODAL FUNCTIONS

///////////////OPEN MODAL FUNCTIONS 
openModal: function  () {
  const overlay = document.querySelector('.overlay')
  overlay.classList.remove("hidden")
},


///////////////CLOSE MODAL FUNCTIONS 

closeModal: function () { //ACCION AL CERRAR EL MODAL 
  const overlay = document.querySelector('.overlay')
  overlay.classList.add('hidden');
}, 


////////////////CREATE CHECKBOX DIMAMICLY 
addDeleteBtn: function () {

    const deleteBtn = document.createElement("input");
    deleteBtn.type = "checkbox";
    deleteBtn.id = "eliminar";
    deleteBtn.className = "some-name"; // AGREGARLE UNA CLASE
    return deleteBtn;//RETORNA EL CHECKBOX

}

// ,
// //CLICK VALIDATE A CHECKBOX CHANGE
// ClickValidate: function (li) {
//       // SETTIMEOUT PARA DELETE DEL API
//         setTimeout(() => {
//             deleteTask(li.id)
//             //TRES SEGUNDOS DE RETARDO
//         }, 1000);
// }


// function ClickValidate(li) {
//     li.addEventListener("change", function () {
//         //SETTIMEOUT PARA DELETE DEL API
//         setTimeout(() => {
//             deleteTask(li.id)
//             //TRES SEGUNDOS DE RETARDO
//         }, 1000);
//     })
// }


// const openModal = function () {//ACCION AL ABRIR EL MODAL 
//   overlay.classList.remove('hidden');//
// };



};





exports.myFunctionsObject = myFunctionsObject