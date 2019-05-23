'use strict';

var express = require('express');
var router = express.Router();
var data = [{
  image: 'http://jrff12.com',
  brandModel: 'wolks',
  year: 2020,
  plate: 'FF14',
  color: 'white'
},
{
  image: 'http://jrff13.com',
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
