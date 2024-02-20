fetch("http://localhost:8080/testusers", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  })
  .then(response => console.log(response.status) || response) // output the status and return response
  .then(response => response.text()) // send response body to next then chain
  .then(body => console.log(body)) // you can use response body here