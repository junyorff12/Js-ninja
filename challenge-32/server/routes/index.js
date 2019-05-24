'use strict';

var express = require('express');
var router = express.Router();
var data = [{
  image: 'https://image.flaticon.com/icons/png/128/708/708949.png',
  brandModel: 'wolks',
  year: 2020,
  plate: 'FF14',
  color: 'white'
},
{
  image: 'https://image.flaticon.com/icons/png/128/1162/1162412.png',
  brandModel: 'chev',
  year: 2019,
  plate: 'FF15',
  color: 'black'
}];

router.get('/', function(req, res) {
  res.json(data);
});

router.post('/', function(req, res) {
  data.push({
    image: req.body.image,
    brandModel: req.body.brandModel,
    year: req.body.year,
    plate: req.body.plate,
    color: req.body.color 
  });
  res.json({ message: 'success' });
});

module.exports = router;
