const mongoose = require('mongoose');

const roomsSchema = mongoose.Schema({
    id: String,
    gameID: {type: String},
    players: []
});

module.exports = mongoose.model('Rooms', roomsSchema);