//Seleccionamos los elementos html
import { postTask } from "./fetch";
import { getTask } from "./fetch";

const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");//Boton para añadir tarea
const ul = document.querySelector("ul");//lista donde se agregaran los elementos
const empty = document.querySelector(".empty");//parrafo cuando no hay tareas




async function cargarTareas() {
    
    let tareasPrometidas= await getTask()

    for (let i = 0; i < tareasPrometidas.length; i++) {
           const li = document.createElement("li")
    const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
            
    }


}

cargarTareas()

addBtn.addEventListener("click", function () {
   postTask(input.value)
})



//Evento de escucha del boton 
addBtn.addEventListener("click", (e) => { //evento click, y la fucion 
    e.preventDefault();//evitar la recarga al dar click al boton
    const text = input.value;//toma el valor actual del input
    //Validacion
    if (text !== "") { //Si el valor del input no está
  
        const li = document.createElement("li");//Creamos un elemento li
        const p = document.createElement("p");//Creamos un elemento p
        p.textContent = text;//El valor del input será igual al textcontent del parrafo

        li.appendChild(p);//Añadir el parrafo al li
        li.appendChild(addDeleteBtn());//Y al ul se le añade el li y agrega el boton 
        ul.appendChild(li);

        input.value = "";//Cada que se de click, el valor del input se vacía
        empty.style.display = "none";//Seleccionamos el parrafo y su display "none"
     
    }
});
//Funcnion del boton eleiminar
function addDeleteBtn() {
    const deleteBtn = document.createElement("button");//Creamos la variable del boton delete 
    deleteBtn.textContent = "X";//TextContent
    deleteBtn.className = "btn-delete";//Creamos clase css

    deleteBtn.addEventListener("click", (e) => {//Añadimos el elemento de escucha y su evento antes de agregarlo al ul 
        const item = e.target.parentElement;//Variable item /e.target se refiere al boton/parentElement para eliminar el parent element de los li
        ul.removeChild(item);//Tomamos el ul para poder eliminarlo del dom bottando el element

        const items = document.querySelectorAll("li");//seleccionamos todos los li

        if (items.length === 0) {//validamos si hay algún li
            empty.style.display = "block";//Regresa el parrafo
        }
    });

    return deleteBtn;//Una vez se tenga el listener se hace un return 
    // para agregar la funcnion a agregar el li
}














// var img = document.createElement("img");
// img.src = "./imgs/delete.svg";

// var src = document.getElementById("header");
// src.appendChild(img);