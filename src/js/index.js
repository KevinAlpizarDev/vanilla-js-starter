// IMPORTS
import { postTask, getTask, deleteTask, putTask } from "./fetch";
import { myFunctionsObject } from './module';


//SELECTION OF HTML ELEMENTS

//ELEMENTOS DE LA APLICACION PRINCIPAL
const input = document.querySelector("input");//INPUT DE INGRESO DE TAREAS
const addBtn = document.querySelector(".btn-add");//BOTON PARA AÑADIR TAREA
const ul = document.querySelector("ul");//LISTA DONDE SE AGREGAN LOS ELEMENTOS 
const empty = document.querySelector(".empty");//PARRAFO CUANDO NO HAY TAREAS

//ELEMENTOS DEL MODAL 
// const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelector('.show-modal');
// ////////////////////////////////////////////////////////////////////

//GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask()
    empty.style.display = tareasPrometidas.length <= 0 ? "block" : "none"; //Cambia el estilo del display 

    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li")
        const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        li.id = tareasPrometidas[i].id;
        //FUNCION IMPORTADA
        myFunctionsObject.tasksCounter()//CUENTA LA CANTIDAD DE TAREAS 
    ClickValidate(li)
        // validaClick(li)
         li.appendChild(p)
        ul.appendChild(li);
        //CREATE CHECKBOX FUNCTION IMPORTED
        li.appendChild(myFunctionsObject.addDeleteBtn());
    }
    llamarBorrado()
}


cargarTareas()


async function llamarBorrado() {
    let tareasPrometidas = await getTask()

    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li")
        const p = document.createElement("p");
        li.id = tareasPrometidas[i].id
    }
}

function ClickValidate(li) {
    li.addEventListener("change", function () {
        //SETTIMEOUT PARA DELETE DEL API
        setTimeout(() => {
            deleteTask(li.id)
            //TRES SEGUNDOS DE RETARDO
        }, 1000);
    })
}


document.addEventListener('keydown', function (e) {
e.key === 'Escape' || input.value != "" ? postTask(input.value) : console.log(3);
})

//ESCUCHA AL BOTON AGREGAR TAREAS
addBtn.addEventListener("click", function () {
//VALIDACION TAREAS VACÍAS
input.value.trim() != "" ?    postTask(input.value) :   alert("tareas vacías no es valido") 
})


// FUNCION IMPORTADA
myFunctionsObject.currentDay()//MUESTRA EL DÍA ACTUAL 
myFunctionsObject.openModal()

    // MODAL LOGIC
    // const openModal = function () {//ACCION AL ABRIR EL MODAL 
    //   overlay.classList.remove('hidden');//
    // };

    // openModal()

//MODAL LOGIC
// const closeModal = function () { //ACCION AL CERRAR EL MODAL 
//   overlay.classList.add('hidden');
// }


// EVENTO DE ESCUCHA PARA CERRAR EL MODAL
btnsOpenModal.addEventListener("click", function () {
    // closeModal()
    myFunctionsObject.closeModal()
    })
    
//////////////////////

function calcular(operacion, numero1, numero2) { //Parametro 
    switch (operacion) {
    case "sumar" :
        return myFunctionsObject.sumar(numero1, numero2) 
    }
}
export { calcular}

console.log(calcular("sumar", 1,2));


