

//GET API
async function getTask() {
    try {
        const response = await fetch('http://localhost:3000/api/task');
        const data = await response.json();

        return data
    } catch (error) {
        console.error(error);
    }
}

//POST API
const postTask = async (input) => {
    try {
        const response = await fetch('http://localhost:3000/api/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task: input,
                status: "Realizada"
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

//DELETE API
const deleteTask = async (id) => {

    console.log(id)
    try {
        const response = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
      
        console.log(error)
    }
    window.location.reload()
}

//DELETE API
const putTask = async (id) => {

    console.log(id)
    try {
        const response = await fetch(`http://localhost:3000/api/task/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
      
        console.log(error)
    }
    window.location.reload()
}



// EXPORTS
export { getTask, postTask, deleteTask }

