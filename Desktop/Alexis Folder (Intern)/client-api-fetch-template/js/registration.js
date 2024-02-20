const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const mobileInput = document.getElementById("mobileInput");
const languagesInput = document.getElementById("languagesInput");
const sourceInput = document.getElementById("sourceInput");
const submitButton = document.querySelector('input[type="submit"]');
const message = document.querySelector("[message]");

function manage(inputElement) {
    if (inputElement.value.trim() === '')
        submitButton.disabled = true;
    else 
        submitButton.disabled = false;
}

async function register() {
    //const url = 'https://marlow-dev-assessment-exam.vercel.app/register'; // production
    const url = "http://192.168.5.191:8080/register"; //development
    const values = {
        Name: "dentdfdfdftest",
        Email: "den@gmail.com",
        Mobile: "0909090",
        Languages: "ikalahankjdkfj,",
        Source: "linkednin"
    }
    console.log(values)
    // Log the data to console to verify JSON format

    try {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            },
            body: JSON.stringify(values)
        });

        const json = await response.json();

        console.log(json)
    } catch (error) {
        console.error('Error:', error.message);
        message.innerHTML = 'Failed to register. Please try again later.';
    }
}