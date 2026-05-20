//create simple backend server in node js   const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

//create one more route /api/data that returns json data
app.get('/api/data', (req, res) => {
  const data = { message: 'Hello, API!' };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});