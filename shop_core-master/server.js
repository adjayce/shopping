
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');   // mongoose for mongoDB

var app = express();      // create app with express

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

var musicModel = require('./models/music');

mongoose.connect('mongodb://localhost:27017/music');


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

fs.readdir(__dirname + '/music', function(err, items) {
  for (var i=0; i<items.length; i++) {
    readJSONFile(__dirname + '/music/' + items[i], function (err, json) {
      if(err) { throw err; }
      console.log(json);
      musicModel.create({
          artist: json.artist,
          id: json.id,
          images: json.images,
          name: json.name,
          released: json.released,
          price: getRandomInt(9, 30),
          quantity: json.quantity
      })
    });
  }
});
