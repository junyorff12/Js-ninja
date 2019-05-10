'use strict';

let express = require('express');
let cors = require('cors');
let app = express();

let users = {
   jose: {
      nome: 'Jose',
      idade: 22
   },
   maria: {
      nome: 'Maria',
      idade: 25
   },
   ff12: {
      nome: 'FF12',
      idade: 32
   }
}

app.use(cors());

app.get('/', function(req, res){
   res.send('<h1>Home</h1>');
});

app.get('/user', (req, res) => {
   res.send('User');
})

app.get('/user/:username', (req, res) => {
   let user = req.params.username
   if( users[user]){
      return res.json(users[user]);
   }
   res.status(404).json({error: 'Usuario não encontrado!'});
})


app.listen(3000);