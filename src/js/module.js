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
}



};





exports.myFunctionsObject = myFunctionsObject