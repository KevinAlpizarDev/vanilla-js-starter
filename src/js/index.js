// IMPORTS
import { postTask } from "./fetch";
import { getTask } from "./fetch";
import { deleteTask } from "./fetch";

//Seleccionamos los elementos html
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");//Boton para añadir tarea
const ul = document.querySelector("ul");//lista donde se agregaran los elementos
const empty = document.querySelector(".empty");//parrafo cuando no hay tareas


//GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask()

    // console.log( typeof tareasPrometidas.length)

    if (tareasPrometidas.length <= 0) {//validamos si hay algún li
        empty.style.display = "block";//Regresa el parrafo
    }
    else if (tareasPrometidas.length >= 0) {
        empty.style.display = "none";//Regresa el parrafo
    }

    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li")
        const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        li.id = tareasPrometidas[i].id;

        counterFunction();
        validaClick(li)
        li.appendChild(p)

        li.appendChild(addDeleteBtn());

        ul.appendChild(li);
    }
    llamarBorrado()
}


cargarTareas()

//OBTNER EL ID DEL TARGET
//debo agregar un id, itero sobre algo y meto en delete task el retorno ya que delete task con el id puede borrar del api
async function llamarBorrado() {

    let tareasPrometidas = await getTask()






    for (let i = 0; i < tareasPrometidas.length; i++) {
        // console.log(i);
        const li = document.createElement("li")
        const p = document.createElement("p");
        li.id = tareasPrometidas[i].id


    }
    // console.log("WADADAWDA")
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


////////////////////

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape') {
        if (input.value != "") {
            postTask(input.value)

        }
    }

})
//ESCUCHA AL BOTON AGREGAR TAREAS
addBtn.addEventListener("click", function () {
    //VALIDACION TAREAS VACÍAS
    if (input.value != "") {
        postTask(input.value)

    }
})

//DELETE FUNCTION
function addDeleteBtn() {
    const deleteBtn = document.createElement("input");

    deleteBtn.type = "checkbox";
    deleteBtn.id = "eliminar";
    deleteBtn.className = "some-name";//AGREGARLE UNA CLASE




    return deleteBtn;//Una vez se tenga el listener se hace un return
    // para agregar la funcnion a agregar el li
}






let today = document.getElementById("today")
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];


today.innerHTML = `Tasks for: ${day}` 
console.log(day);


pendingTaskCounter = 0
const counterFunction = () => {
    pendingTaskCounter++
    let counter = document.getElementById("counter")
    counter.innerHTML = pendingTaskCounter

}





