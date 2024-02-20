const user = {
    Name: 'alexis jermaine gonzaga',
    Email: 'gonzagajermaine18@gmail.com',
    Mobile: '09478849425',
    Languages: 'javascript, python',
    Source: 'https://www.linkedin.com/checkpoint/challenge/AgHox4okgrZN0AAAAY2_QsY41m5vgEokYkTgqwoepgdmj9lC4sRqG_2Wmryyi8RFOXS98d7TA8BEWbC0KR-jOXvwMJW_qQ?ut=2NIYipFE4DsH81'
};

console.log(user);

fetch('http://192.168.5.191:8080/register', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    },
    body: JSON.stringify(user)
})
.then(res => {
    // if (!res.ok) {
    //     throw new Error('Network response was not ok');
    // }
    return res.json();
})
.then(data => {
    console.log(data); // Log the response data
})
.catch(error => {
    console.error('Error:', error); // Log any errors that occur during the request
});