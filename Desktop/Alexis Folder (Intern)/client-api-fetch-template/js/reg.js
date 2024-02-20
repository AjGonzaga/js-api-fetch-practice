const inputs = document.querySelectorAll(".form-input input")
const submit = inputs[5]

const message = document.querySelector("[message]")

function manage(text) {
    if (text.value.trim() === '')
        submit.disabled = true
    else submit.disabled = false
}

async function register() {
    // sample fetch for POST
    const url = 'https://marlow-dev-assessment-exam.vercel.app/register'; // auth url
    const data = {
          "Name": `${inputs[0].value}`,
          "Email": `${inputs[1].value}`,
          "Mobile": `${inputs[2].value}`,
          "Languages": `${inputs[3].value}`,
          "Source": `${inputs[4].value}`,
    }
    console.log(inputs[0].value)
 
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer testing123',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            },
            body: JSON.stringify(data),
            
        });
        const json = await response.json();
        message.innerHTML = json;
        console.log(json)
    
}