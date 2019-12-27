const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
    type: String,
        required: true,
    },
    avatar: {
        type: String
    },
    isAdmin: {
        type: Boolean
    }
});

module.exports = mongoose.model("Users", usersSchema);