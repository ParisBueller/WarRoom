const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    owner: String,
    roster: { type: Number, ref: 'Player'}
});

mongoose.model('team', teamSchema);