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

    let tareasPrometidas= await getTask()

    for (let i = 0; i < tareasPrometidas.length; i++) {
           const li = document.createElement("li")
    const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        // p.tas = tareasPrometidas[i].id

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

    
        
        
    }llamarBorrado()

    // llamarBorrado()
    

   
}
cargarTareas()

//OBTNER EL ID DEL TARGET
//debo agregar un id, itero sobre algo y meto en delete task el retorno ya que delete task con el id puede borrar del api
async function llamarBorrado() {

    let tareasPrometidas= await getTask()

    for (let i = 0; i < tareasPrometidas.length; i++) {
        // console.log(i);
        const li = document.createElement("li")
 const p = document.createElement("p");
 p.id = tareasPrometidas[i].id
console.log(p.id);
    //  p.task= tareasPrometidas[i].id;
    //  p = tareasPrometidas[i].id
// console.log(p.id);
//      li.appendChilyd(p);
//      li.appendChild(addDeleteBtn());
//      ul.appendChild(li);
    }
    
    // console.log("WADADAWDA")
    const deleteBtn1 =document.getElementById("eliminar")

   deleteBtn1.addEventListener("click",function () {
    
    deleteTask()//id
   })
}


//ESCUCHA AL BOTON AGREGAR TAREAS
addBtn.addEventListener("click", function () {
   postTask(input.value)
})



// async function eliminarTareas() {
//     let eliminarPrometidas= await deleteTask(id)

//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.className = "btn-delete";

//     deleteBtn.addEventListener("click", (e) => {
//         const item = e.target.parentElement;
//         ul.removeChild(item);

//         const items = document.querySelectorAll("li");

//         if (items.length === 0) {
//             empty.style.display = "block";
//         }
//     });

//     return deleteBtn;
// }
// eliminarTareas()





//DELETE FUNCTION
function addDeleteBtn() {

    const deleteBtn = document.createElement("input");
    deleteBtn.type="checkbox";
    deleteBtn.className="some-name";
    deleteBtn.id="eliminar";
    // const textContent = document.createTextNode("Label text content");

//original
    // const deleteBtn = document.createElement("button");//Creamos la variable del boton delete 
    // deleteBtn.textContent = "X";//TextContent
    // deleteBtn.className = "btn-delete";//Creamos clase css
    // deleteBtn.id="eliminar"

    deleteBtn.addEventListener("click", (e) => {//Añadimos el elemento de escucha y su evento antes de agregarlo al ul 
      
      
        setTimeout(() => {
            // validateFunction();
            const item = e.target.parentElement;//Variable item /e.target se refiere al boton/parentElement para eliminar el parent element de los li
            ul.removeChild(item);//Tomamos el ul para poder eliminarlo del dom bottando el element
    
            const items = document.querySelectorAll("li");//seleccionamos todos los li
    
            if (items.length === 0) {//validamos si hay algún li
                empty.style.display = "block";//Regresa el parrafo
            }
        }, 5000);
      
    });

    return deleteBtn;//Una vez se tenga el listener se hace un return 
    // para agregar la funcnion a agregar el li
}

















// var img = document.createElement("img");
// img.src = "./imgs/delete.svg";

// var src = document.getElementById("header");
// src.appendChild(img);


const button = document.getElementById("open")


// button.addEventListener("click", function () {
//     location.href = "/index.html";
//  })
 