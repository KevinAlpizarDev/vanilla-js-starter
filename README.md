### Iniciar la aplicación

```
npm start
```

<form action="/myform" method="POST">
        <input type="text" name="mytext" required />
        <input type="submit" value="Submit" />
    </form>
    app.post('/myform', function(req, res){ 
  console.log(req.body.mytext); //mytext is the name of your input box
});

<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-location-filled" width="32" height="32" viewBox="0 0 24 24" stroke-width="0.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M20.891 2.006l.106 -.006l.13 .008l.09 .016l.123 .035l.107 .046l.1 .057l.09 .067l.082 .075l.052 .059l.082 .116l.052 .096c.047 .1 .077 .206 .09 .316l.005 .106c0 .075 -.008 .149 -.024 .22l-.035 .123l-6.532 18.077a1.55 1.55 0 0 1 -1.409 .903a1.547 1.547 0 0 1 -1.329 -.747l-.065 -.127l-3.352 -6.702l-6.67 -3.336a1.55 1.55 0 0 1 -.898 -1.259l-.006 -.149c0 -.56 .301 -1.072 .841 -1.37l.14 -.07l18.017 -6.506l.106 -.03l.108 -.018z" stroke-width="0" fill="currentColor" />
</svg>

Este código implementa un servidor Node.js utilizando Express, que proporciona una API REST para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en una lista de tareas. Aquí está el desglose:

Configuración inicial:

Se importan los módulos necesarios: express, cors y uuidv4.
Se crea una instancia de la aplicación Express.
Se configura el middleware para analizar el cuerpo de las solicitudes como JSON.
Configuración de CORS:

Se utiliza el middleware cors para permitir solicitudes de diferentes dominios. Esto es útil cuando se realiza una solicitud desde un cliente alojado en un dominio diferente al del servidor.
Configuración del servidor:

Se inicia el servidor en el puerto 3000.
Se muestra un mensaje en la consola cuando el servidor está listo para aceptar conexiones.
Definición del enrutador de tareas (taskRouter):

Se crea un enrutador utilizando express.Router() para manejar las rutas relacionadas con las tareas.
Se inicializa un arreglo tasks para almacenar las tareas.
Manejo de las rutas:

Ruta "/":

Método GET: Devuelve todas las tareas existentes.
Método POST: Agrega una nueva tarea al arreglo tasks con un ID único generado usando uuidv4().
Ruta "/:task_id":

Método GET: Devuelve la tarea con el ID especificado en la URL.
Método DELETE: Elimina la tarea con el ID especificado en la URL.
Método PUT: Actualiza la tarea con el ID especificado en la URL con los datos proporcionados en el cuerpo de la solicitud.
Montaje del enrutador:

Se monta el enrutador de tareas en la ruta base "/api/task/". Esto significa que todas las rutas definidas en taskRouter se manejarán bajo la URL base /api/task/.
En resumen, este código establece un servidor Node.js con Express que proporciona una API REST para administrar tareas, incluyendo operaciones como agregar, eliminar, actualizar y recuperar tareas. La lista de tareas se almacena en memoria durante la ejecución del servidor.

agregar a la tabla por medio de innetHTML

var img = document.createElement("img");
img.src = "./img/delete.svg";
var src = document.getElementById("header");
src.appendChild(img);

// Inserte el código aquí
import {extraerDatos} from "./agregarDatos"
let divTasks = document.querySelector(".grupo")
async function getTask() {
try {
const response = await fetch('http://localhost:3000/api/task');
const data = await response.json();
} catch (error) {
console.error(error);
}
}
getTask();
let agregar = document.getElementById("agregar")
agregar.addEventListener("click", function () {
const postTask= async () => {
try {
const response = await fetch('http://localhost:3000/api/task', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
task: inputAgregarTarea.value,
status: "Realizada"
})
});
const data = await response.json();
console.log(data);
}catch(error) {
console.log(error)
}
}
postTask();
});
export {getTask}

delete == post / api/task/ id como parametro

//Evento de escucha del boton
// addBtn.addEventListener("click", (e) => { //evento click, y la fucion
// e.preventDefault();//evitar la recarga al dar click al boton
// const text = input.value;//toma el valor actual del input
// //Validacion
// if (text !== "") { //Si el valor del input no está

// const li = document.createElement("li");//Creamos un elemento li
// const p = document.createElement("p");//Creamos un elemento p
// p.textContent = text;//El valor del input será igual al textcontent del parrafo

// li.appendChild(p);//Añadir el parrafo al li
// li.appendChild(addDeleteBtn());//Y al ul se le añade el li y agrega el boton
// ul.appendChild(li);

// input.value = "";//Cada que se de click, el valor del input se vacía
// empty.style.display = "none";//Seleccionamos el parrafo y su display "none"

// }
// });

    // deleteBtn.addEventListener("click", (e) => {//Añadimos el elemento de escucha y su evento antes de agregarlo al ul


    //         // const item = e.target.parentElement;//Variable item /e.target se refiere al boton/parentElement para eliminar el parent element de los li
    //         // ul.removeChild(item);//Tomamos el ul para poder eliminarlo del dom bottando el element

    //         // const items = document.querySelectorAll("li");//seleccionamos todos los li

    //         // if (items.length === 0) {//validamos si hay algún li
    //         //     empty.style.display = "block";//Regresa el parrafo
    //         // }

Eliminar el mensajes de p cuando hay una tarea

crear el contador

Bonus:

Poder buscar en la lista de to-do y filtrar por tareas que contengan el texto buscado.

    <!-- HEADER -->
    <header>
    	<div class="search">
    		<form>
    			<input type="text" placeholder="Agregar tarea...">
    			<button class="btn-add">
    				<img src="./imgs/seachBar.svg" alt="">
    			</button>
    		</form>
    </header>




    <h2>nothing</h2>


    <h2>lista de Tareas</h2>

<div>
	
	<h4 id="today"></h4>
	<h2 id="counter"></h2>
</div>

    <div class="li-container">
    	<ul>

    	</ul>
    </div>
    <div class="empty">

    	<p>No tienes tareas pendientes</p>
    <h3>CHECKBOX</h3>
    </div>





    hola
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo et quo! Corporis nobis in iste
    		tenetur error fugit, tempora id quaerat animi mollitia illo optio magni ut possimus voluptatum.
    		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci incidunt cupiditate libero unde
    		vero totam officia porro doloremque quod nisi odit perspiciatis officiis, quis earum, fugiat ipsum id
    		quisquam?
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim pariatur sapiente totam quod expedita
    		similique! Suscipit cupiditate nobis alias, voluptas dolore non accusantium quaerat, assumenda aperiam sunt
    		ab dolor!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores delectus est debitis id enim
    		deserunt, velit quos impedit asperiores in sed ullam atque vitae quis aut doloribus commodi sunt!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi maxime voluptatibus impedit eaque. Magni
    		quod provident nemo fuga quia officiis illo alias accusantium dolor, ratione dicta tempora veritatis
    		mollitia!
    		hola
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo et quo! Corporis nobis in iste
    		tenetur error fugit, tempora id quaerat animi mollitia illo optio magni ut possimus voluptatum.
    		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci incidunt cupiditate libero unde
    		vero totam officia porro doloremque quod nisi odit perspiciatis officiis, quis earum, fugiat ipsum id
    		quisquam?
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim pariatur sapiente totam quod expedita
    		similique! Suscipit cupiditate nobis alias, voluptas dolore non accusantium quaerat, assumenda aperiam sunt
    		ab dolor!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores delectus est debitis id enim
    		deserunt, velit quos impedit asperiores in sed ullam atque vitae quis aut doloribus commodi sunt!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi maxime voluptatibus impedit eaque. Magni
    		quod provident nemo fuga quia officiis illo alias accusantium dolor, ratione dicta tempora veritatis
    		mollitia!
    		hola
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo et quo! Corporis nobis in iste
    		tenetur error fugit, tempora id quaerat animi mollitia illo optio magni ut possimus voluptatum.
    		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci incidunt cupiditate libero unde
    		vero totam officia porro doloremque quod nisi odit perspiciatis officiis, quis earum, fugiat ipsum id
    		quisquam?
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim pariatur sapiente totam quod expedita
    		similique! Suscipit cupiditate nobis alias, voluptas dolore non accusantium quaerat, assumenda aperiam sunt
    		ab dolor!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores delectus est debitis id enim
    		deserunt, velit quos impedit asperiores in sed ullam atque vitae quis aut doloribus commodi sunt!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi maxime voluptatibus impedit eaque. Magni
    		quod provident nemo fuga quia officiis illo alias accusantium dolor, ratione dicta tempora veritatis
    		mollitia!
    		hola
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo et quo! Corporis nobis in iste
    		tenetur error fugit, tempora id quaerat animi mollitia illo optio magni ut possimus voluptatum.
    		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci incidunt cupiditate libero unde
    		vero totam officia porro doloremque quod nisi odit perspiciatis officiis, quis earum, fugiat ipsum id
    		quisquam?
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim pariatur sapiente totam quod expedita
    		similique! Suscipit cupiditate nobis alias, voluptas dolore non accusantium quaerat, assumenda aperiam sunt
    		ab dolor!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores delectus est debitis id enim
    		deserunt, velit quos impedit asperiores in sed ullam atque vitae quis aut doloribus commodi sunt!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi maxime voluptatibus impedit eaque. Magni
    		quod provident nemo fuga quia officiis illo alias accusantium dolor, ratione dicta tempora veritatis
    		mollitia!
    		hola
    		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique nemo et quo! Corporis nobis in iste
    		tenetur error fugit, tempora id quaerat animi mollitia illo optio magni ut possimus voluptatum.
    		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima adipisci incidunt cupiditate libero unde
    		vero totam officia porro doloremque quod nisi odit perspiciatis officiis, quis earum, fugiat ipsum id
    		quisquam?
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore enim pariatur sapiente totam quod expedita
    		similique! Suscipit cupiditate nobis alias, voluptas dolore non accusantium quaerat, assumenda aperiam sunt
    		ab dolor!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolores delectus est debitis id enim
    		deserunt, velit quos impedit asperiores in sed ullam atque vitae quis aut doloribus commodi sunt!
    		Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi maxime voluptatibus impedit eaque. Magni
    		quod provident nemo fuga quia officiis illo alias accusantium dolor, ratione dicta tempora veritatis
    		mollitia!
