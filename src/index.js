const express = require('express')
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Chris Lee\'s Convergence BE Todo App')
});

app.listen(port, () => {
  console.log(`Convergence Todo app listening on port ${port}!`)
});
