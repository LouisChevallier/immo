const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    adresse : {
        type: String,
        required: true,
        unique: true
    },
    codepostal : {
        type : String,
        required: true
    },
    ville : {
        type : String,
        required: true
    },
    prix : {
        type : String,
        required: true
    },
})

const Annoncedb = mongoose.model('annoncedb', schema);

module.exports = Annoncedb;