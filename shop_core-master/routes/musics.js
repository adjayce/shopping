'use strict';

var express = require('express');
var cors = require('cors');

var Music = require('../models/music');

var app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

// api ----------------------------------------------------------------------------
app.get('/', function(req, res) {
  // use mongoose to get music in the database
  Music.find(function(err, musics) {
    if (err)
      res.send(err);
    res.json(musics); // return music in JSON format
  });
});

// update music when it is purchased
app.put('/update', function(req, res) {
  // debugger
  Music.update({
    name: req.body.name
  }, {
    $set: {
      quantity: req.body.quantity
    }
  }, function(err, todo) {
    if (err)
      res.send(err);
    res.send(req.body.name);
  });

});

module.exports = app;