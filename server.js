const express = require('express');

const app = express();
const port = 3000;

// app.use(express.static('public'));

app.get("/now", (request, response) => {
    const date = new Date();
    console.log(response.baseUrl + date)
    // console.log(response.location)
    response.send(date);
  });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})