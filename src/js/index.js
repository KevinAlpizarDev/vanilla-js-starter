// IMPORTS
import { postTask, getTask, deleteTask, putTask } from "./fetch";
// import { myobject } from "./module";

//Seleccionamos los elementos html
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");//Boton para añadir tarea
const ul = document.querySelector("ul");//lista donde se agregaran los elementos
const empty = document.querySelector(".empty");//parrafo cuando no hay tareas
////////////////////
const completeModal = document.getElementById("complete-modal")
////////////////////////////////////////////////////////////////////



//GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask()

    if (tareasPrometidas.length <= 0) {//validamos si hay algún li
        empty.style.display = "block";//Regresa el parrafo
        completeModal.style.display = "block"
    }
    else if (tareasPrometidas.length >= 0) {
        empty.style.display = "none";//Regresa el parrafo
        completeModal.style.display = "none"
        }
        
    for (let i = 0; i < tareasPrometidas.length; i++) {
        const li = document.createElement("li")
        const p = document.createElement("p");
        p.textContent = tareasPrometidas[i].task;
        li.id = tareasPrometidas[i].id;

        counterFunction();
        // colorFun()
        // console.log(colorFun());
        validaClick(li)
   
  


     
         li.appendChild(p)

        // let inputs = document.createElement("input")
       
        // inputs.id = "inputs";
        // inputs.setAttribute("readonly", "readonly");
        
        // inputs.addEventListener("dblclick", function () {
        //     inputs.removeAttribute("readonly");
        // })

        // editButton.addEventListener("click", function () {
           
        // })
       
        // inputs.value = p.textContent
        ul.appendChild(li);
        // li.appendChild(inputs)
      
        // li.appendChild( editButton())


        li.appendChild(addDeleteBtn());

     

        
        // ul.appendChild(input)
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

// function noValidaClick(li) {
//     li.addEventListener("change", function () {
//         //SETTIMEOUT PARA DELETE DEL API
//         clearTimeout(() => {
//             deleteTask(li.id)
//             //TRES SEGUNDOS DE RETARDO
//         }, 1000);
//     })
// }
////////////////////
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
    deleteBtn.className = "some-name";//AGREGARLE UNA CLASE
    // deleteBtn.style.backgroundColor = "#f41155"
    // deleteBtn.style.color = "red"
    return deleteBtn;//Una vez se tenga el listener se hace un return
    // para agregar la funcnion a agregar el li
}



// function editButton() {
//     let editButton = document.createElement("button")
//     editButton.innerHTML = "Edit"
//     return editButton
// }





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

// console.log(calcular("sumar", 1, 2));
// let fontColor = document.getElementById("fontColor")

// ////////////////////////////////////////
// colorCounter = 0
// actualColor = ["#ff0000", "#FFFACD", "#F5FFFA", "#87CEEB"]
// const colorFun = () => {

//     colorCounter <= 3 ? console.log(actualColor[colorCounter++]) : console.log(actualColor[colorCounter = 0])
//     fontColor.style.color = `${actualColor}`;
// }

//NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};


 openModal()

btnsOpenModal.addEventListener("click", function () {
    closeModal()
})
//   btnsOpenModal[i].addEventListener('click', closeModal());

// if (openModal()) {
//     openModal()
// }else{
//     openModal()
// }
// openModal()

// openModal()
let count = 0
// btnsOpenModal.addEventListener("click", function () {
//     // count++
//     console.log(  count++);
 
 
//  })

// count = 0
//  if (count === 0) {
//    openModal()

//    console.log(  count++);
//    btnsOpenModal.addEventListener("click", function () {
//     // count++
//     console.log(  count++);
 
//  closeModal()

// if (count >= 1 && closeModal()) {
//     closeModal()
//     count=0
// }

//  })
   
// }

// if (!document.cookie.includes("modalOpened")) {
//     // Si no se ha abierto, abrir la modal y establecer una cookie
//     openModal();
//     document.cookie = "modalOpened=true; expires=Thu, 01 Jan 2026 00:00:00 UTC; path=/";
//   }
  




// if () {
    
//     btnsOpenModal.addEventListener("click", function () {
    
//         closeModal()
     
//      })

   
// }    




// let somecounter = 0
// btnsOpenModal.addEventListener("click", function () {

//    closeModal()

// })
const closeModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  console.log("abierto");



  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log("cerrado");
};

// closeModal()
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', closeModal);

// // btnCloseModal.addEventListener('click', openModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   // console.log(e.key);

//   if (e.key == "Enter" && e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// })


// excecutionCounter = 0

// const excecution = () => {
//     btnsOpenModal.addEventListener("click", function () {
//        excecutionCounter++
//        if (excecutionCounter >= 0) {
        
//        } else {
        
//        } 
//     })
// }
// excecution()

// const openModalOnce = (function() {
//     var executed = false;

//     return function() {
//         if (!executed) {
//             executed = true;
//             openModal(); // Llamamos a la función openModal cuando se ejecute por primera vez
//         }
//     };
// })();

// openModalOnce(); // Esto abrirá el modal