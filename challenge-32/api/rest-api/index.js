'use strict';

let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let app = express();

let users = {
   jose: {
      username: 'Jose',
      age: 22
   },
   maria: {
      username: 'Maria',
      age: 25
   },
   ff12: {
      username: 'FF12',
      age: 32
   }
}
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.get('/', function(req, res){
   res.json( {response: 'HOME'});
});

app.get('/user', (req, res) => {
   res.json({response: 'User'});
})

app.get('/user/:username', (req, res) => {
   let user = req.params.username
   if( users[user]){
      return res.json(users[user]);
   }
   res.status(404).json({error: 'Usuario não encontrado!'});
})

app.post('/user', function(){
  res.body
})

app.listen(3000);