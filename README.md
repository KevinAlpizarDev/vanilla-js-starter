Rosa pastel: #FFD1DC
Amarillo pastel: #FFFACD
Verde menta pastel: #F5FFFA
Azul cielo pastel: #87CEEB
Lila pastel: #E6E6FA
Melocotón pastel: #FFDAB9
Verde agua pastel: #E0FFFF
Lavanda pastel: #FFF0F5
Coral pastel: #FF7F50
Azul claro pastel: #ADD8E6


proportion of task fixed



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
        colorFun()
        // console.log(colorFun());
        validaClick(li)
        li.appendChild(p)

        let input = document.createElement("input")
        console.log(input)
        input.setAttribute("readonly", "readonly");

        li.appendChild(addDeleteBtn());

        input.value = p.textContent

        ul.appendChild(li);
        ul.appendChild(input)
    }
    llamarBorrado()
}

















////////////////////////////////////////////////////////////////////
//GET FUNCTION
async function cargarTareas() {
    let tareasPrometidas = await getTask()

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
        colorFun()
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
      
        li.appendChild( editButton())


        li.appendChild(addDeleteBtn());

        

        // ul.appendChild(input)
    }
    llamarBorrado()
}