//create simple backend server in node js   const express = require('express');
const app = express();
const port = 3000;  

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/data', (req, res) => {        
  const data = { message: 'Hello, API!' };
  res.json(data);
}); 

//my new work ankur
app.get('/api/user', (req, res) => {        
  const userData = { name: 'John Doe', email: 'john.doe@example.com' };
  res.json(userData);
}); 
//my new work ankurwsfdefeffwefwewfwe
//console.log('This is a test log message.');
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

//my newcomapny name is speed innvoations