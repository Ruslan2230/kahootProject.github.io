const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:kahoot-admin@ds249079.mlab.com:49079/kahoot');

mongoose.connection.on('error', (e) => {
    console.log("CHECK YOUR DATABASE!");
    console.log(e);
});
mongoose.connection.once('open', () => {
    console.log("DB IS STARTED!");
});