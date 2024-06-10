// IMPORTS
import { postTask, getTask, deleteTask, putTask } from "./fetch";
import { myFunctionsObject } from './module';

// SELECTION OF HTML ELEMENTS
// ELEMENTOS DE LA APLICACION PRINCIPAL
const input = document.querySelector("input"); // INPUT DE INGRESO DE TAREAS
const addBtn = document.querySelector(".btn-add"); // BOTON PARA AÑADIR TAREA
const ul = document.querySelector("ul"); // LISTA DONDE SE AGREGAN LOS ELEMENTOS 
const empty = document.querySelector(".empty"); // PARRAFO CUANDO NO HAY TAREAS

// ELEMENTOS DEL MODAL 
const btnsOpenModal = document.querySelector('.show-modal');

// GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask();
    empty.style.display = tareasPrometidas.length <= 0 ? "block" : "none"; // Cambia el estilo del display 

    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        li.id = tareasPrometidas[i].id;
        // FUNCION IMPORTADA
        myFunctionsObject.tasksCounter(); // CUENTA LA CANTIDAD DE TAREAS 
        ClickValidate(li);
        li.appendChild(p);
        ul.appendChild(li);
        // CREATE CHECKBOX FUNCTION IMPORTED
        li.appendChild(myFunctionsObject.addDeleteBtn());
    }
    myFunctionsObject.llamarBorrado();
}

cargarTareas();

function ClickValidate(li) {
    li.addEventListener("change", function () {
        // SETTIMEOUT PARA DELETE DEL API
        setTimeout(() => {
            deleteTask(li.id);
            // TRES SEGUNDOS DE RETARDO
        }, 1000);
    });
}

document.addEventListener('keydown', function (e) {
    e.key === 'Escape' || input.value != "" ? postTask(input.value) : console.log(3);
});

// ESCUCHA AL BOTON AGREGAR TAREAS
addBtn.addEventListener("click", function () {
    // VALIDACION TAREAS VACÍAS
    input.value.trim() != "" ? postTask(input.value) : alert("Write a Task");
});

// FUNCION IMPORTADA
myFunctionsObject.currentDay(); // MUESTRA EL DÍA ACTUAL 

// EVENTO DE ESCUCHA PARA CERRAR EL MODAL
btnsOpenModal.addEventListener("click", function () {
  
    myFunctionsObject.closeModal();
});