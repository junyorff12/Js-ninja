'use strict';

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();

let users = [
   {
      username: 'joao',
      name: 'João',
      age: 32
   },
   {
      username: 'maria',
      name: 'Maria',
      age: 22
   }
];

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', function(req, res){
   res.json( {response: 'HOME'});
});

app.get('/user', (req, res) => {
   res.json({response: 'User'});
})

app.get('/user/:username', (req, res) => {
   let username = req.params.username
   let hasUser = users.some(user => {
      return user.username === username;
   });
   if(hasUser){
      return res.json( users.filter( user => {return user.username === username}));
   }
   res.status(404).json({error: 'Usuario não encontrado!'});
})

app.post('/user', function(req, res){
  let username = req.body.username;
  let age = req.body.age;
  let user = req.body.user;

  let hasUser = users.some( user => {
     return user.username === username;
  });

  if(!hasUser){
     users.push({
        username: username,
        user: user,
        age: age
     });
  }

  res.json( users );
})

app.listen(3000);