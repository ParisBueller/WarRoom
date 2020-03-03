const mongoose = require('mongoose');
const { Schema } = mongoose;

const leagueSchema = new Schema({
    name: String, 
    teams: { type: Number, ref: 'Team'},
    commissioner: { type: Schema.Types.ObjectId, ref: 'User'},
    dateCreated: Date
})

mongoose.model('league', leagueSchema);