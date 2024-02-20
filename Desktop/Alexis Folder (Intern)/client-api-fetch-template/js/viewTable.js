const message = document.querySelector("[dataview]")

async function viewData() {
    // sample fetch in getting data
    const SidAPIUrl = "https://jsonplaceholder.typicode.com/users/2" // you can paste and navigate this link in browser to see the data
        try {
                const response = await fetch(SidAPIUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();
            
            message.innerHTML += "<td><strong>" + json.id + "</strong></td>"
            message.innerHTML += "<td><strong>" + json.name + "</strong></td>"
            message.innerHTML += "<td><strong>" + json.phone + "</strong></td>"
            message.innerHTML += "<td><strong>" + json.email + "</strong></td>"
            message.innerHTML += "<td><strong>" + json.company.name + "</strong></td>"

           
        } catch (error) {
            console.error('error:', error);
    }
}

viewData()  