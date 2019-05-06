'use strict';

let express = require('express');
let app = express();

app.get('/', function(req, res){
   res.send('<h1>Home</h1>');
});

app.get('/user', (req, res) => {
   res.send('User');
})

app.listen(3000);