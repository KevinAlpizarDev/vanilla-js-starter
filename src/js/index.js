// IMPORTS
import { postTask, getTask, deleteTask, putTask } from "./fetch";
import { myFunctionsObject } from "./module";


//SELECTION OF HTML ELEMENTS

//ELEMENTOS DE LA APLICACION PRINCIPAL
const input = document.querySelector("input");//INPUT DE INGRESO DE TAREAS
const addBtn = document.querySelector(".btn-add");//BOTON PARA AÑADIR TAREA
const ul = document.querySelector("ul");//LISTA DONDE SE AGREGAN LOS ELEMENTOS 
const empty = document.querySelector(".empty");//PARRAFO CUANDO NO HAY TAREAS
//ELEMENTOS DEL MODAL 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
// const completeModal = document.getElementById("complete-modal")
// ////////////////////////////////////////////////////////////////////

// const completeButton = document.getElementById("complete-button")


//GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask()

    if (tareasPrometidas.length <= 0) {//VALIDACION SI NO HAY TAREAS  validamos si hay algún li
        empty.style.display = "block";//SE MUESTRA EL PARRAFO EN EL DISPLAY 
    }
    else if (tareasPrometidas.length >= 0) {//VALIDACION SI HAY TAREAS
        empty.style.display = "none";//DESAPARECE EL PARRAFO
        }


    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li")
        const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        li.id = tareasPrometidas[i].id;

        // counterFunction();
        //FUNCION IMPORTADA
        myFunctionsObject.tasksCounter()//CUENTA LA CANTIDAD DE TAREAS 
  
        validaClick(li)
   
  
     
         li.appendChild(p)

        ul.appendChild(li);

        li.appendChild(addDeleteBtn());

    }
    llamarBorrado()
}











cargarTareas()

//OBTNER EL ID DEL TARGET
//debo agregar un id, itero sobre algo y meto en delete task el retorno ya que delete task con el id puede borrar del api
async function llamarBorrado() {

    let tareasPrometidas = await getTask()

    for (let i = 0; i < tareasPrometidas.length; i++) {

        const li = document.createElement("li")
        const p = document.createElement("p");
        li.id = tareasPrometidas[i].id


    }

}

function validaClick(li) {
    li.addEventListener("change", function () {
        //SETTIMEOUT PARA DELETE DEL API




        setTimeout(() => {
            deleteTask(li.id)
            //TRES SEGUNDOS DE RETARDO
        }, 1000);
    })



}


document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (input.value != "") {
            postTask(input.value)
        }
    }
})
//ESCUCHA AL BOTON AGREGAR TAREAS
addBtn.addEventListener("click", function () {
    //VALIDACION TAREAS VACÍAS
    if (input.value.trim() != "") {
        postTask(input.value)
    } else {
        alert("tareas vacías no es valido")
    }
})

//DELETE FUNCTION
function addDeleteBtn() {
    const deleteBtn = document.createElement("input");
    deleteBtn.type = "checkbox";
    deleteBtn.id = "eliminar";
    deleteBtn.className = "some-name"; // AGREGARLE UNA CLASE

    // Establecer estilos directamente
    deleteBtn.style.backgroundColor = "#f41155";
    deleteBtn.style.color = "red";

    return deleteBtn;
}


// FUNCION IMPORTADA
myFunctionsObject.currentDay()//MUESTRA EL DÍA ACTUAL 

//NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN


// EVENTO DE ESCUCHA PARA CERRAR EL MODAL
btnsOpenModal.addEventListener("click", function () {
    closeModal()
    })
    
    // MODAL LOGIC
    const openModal = function () {//ACCION AL ABRIR EL MODAL 
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
    
    };
//  openModal()

//MODAL LOGIC
const closeModal = function () { //ACCION AL CERRAR EL MODAL 
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log("abierto");


  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log("cerrado");
};



//////////////////////

function calcular(operacion, numero1, numero2) { //Parametro 

    switch (operacion) {
    case "sumar" :
        return myFunctionsObject.sumar(numero1, numero2) 
    }
}


console.log(calcular("sumar", 1,2));







