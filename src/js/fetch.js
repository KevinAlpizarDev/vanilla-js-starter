


async function getTask() {
    try {
        const response = await fetch('http://localhost:3000/api/task');
        const data = await response.json();

        return data
    } catch (error) {
        console.error(error);
    }
}


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

export { getTask, postTask }

