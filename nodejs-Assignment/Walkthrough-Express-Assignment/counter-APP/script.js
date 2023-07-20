const express = require('express');
const app = express();
const port = 3020;

let counter = 0;



// Endpoint to get the current counter data
app.get('/', (req, res) => {
  res.send({'counter':counter})
});

// Endpoint to increment the counter by 1
app.get('/increment', (req, res) => {
  counter++;
  res.send({ counter:counter });
});

// Endpoint to decrement the counter by 1
app.get('/decrement', (req, res) => {
  counter--;
  res.send({ counter:counter });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on :${port}`);
});
