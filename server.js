const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

app.use(express.json()); // To parse JSON bodies

app.post('/', (req, res) => {
  const receivedString = req.body.message; // Assuming the POST body has a 'message' field

  if (receivedString) {
    res.send(receivedString);
  } else {
    res.status(400).send('Please provide a message in the request body.');
  }
});

app.listen(port, () => {
  console.log(`Echo server listening on port ${port}`);
});

/*
  {
    "name": "echo-server",
    "version: 0.1.0",
    "main" : "server.js",
    "scripts" : {
    "start": "start node server.js && node client.js",
    "client" : "node client.js"
    }

*/

