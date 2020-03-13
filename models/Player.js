const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: String,
    position: String,
    //ADP:
    //consensus rank:
    //outlook:
});

mongoose.model('player', playerSchema);