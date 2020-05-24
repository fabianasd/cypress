const express = require('express');

const server = express();

server.use(express.json());

//Query params = ?teste=1
/*server.get('/teste', (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`});
})*/

//Route params = /users/1
/*server.get('/users/:id', (req, res) => {
  const id = req.params.id;
  return res.json({ message: `Buscando o usuario ${id}`});
})*/

//Request body = {"name":"Fabi", "email":"fabi@gmail.com"}
/*const users = ['Fabiana', 'Gabriel', 'LindoLindo'];


server.get('/users/:index', (req, res) => {
  const {index} = req.params;
  return res.json(users[index]);
})
*/


const users = ['Fabiana', 'Gabriel', 'Petrovick'];

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('Request');
});

function checkUserExist(req, res, next){
if (!req.body.name){
  return res.status(400).json({ error: 'User name is required'});
}
return next();
}

function checkUserInArry(req, res, next){
  const user = users[req.params.index];

    if (!user){
    return res.status(400).json({ error: 'User does not exist'});
  }

  req.user = user;
  
  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', checkUserInArry, (req, res) => {
  const {index} = req.params;
  return res.json(req.user);
})

server.post('/users', checkUserExist, (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

server.put('/users/:index', checkUserExist, checkUserInArry, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
})

server.delete('/users/:index', checkUserInArry, (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
})
server.listen(3000);

