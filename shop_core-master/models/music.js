var mongoose = require('mongoose');

var musicSchema = mongoose.Schema({
    artist: String,
    id: String,
    images: Object,
    name: String,
    released: Number,
    price: Number,
    quantity: Number
});

var musicModel = mongoose.model('musics', musicSchema);
module.exports = musicModel;



