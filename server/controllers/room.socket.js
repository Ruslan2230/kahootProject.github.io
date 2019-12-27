const Rooms = require('../models/rooms');


module.exports = {
    connect: (client) => {
        // load to DB
        // emit events
        let roomID = client.handshake.query.roomID;

        // Rooms.findById(roomID)
        //     .then((room) => {
        //         debugger
        //         Rooms.findByIdAndUpdate(roomID, {
        //             players:room.players.push({name: client.handshake.query.name,
        //                 points: 0})
        //
        //         })
        //
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //     })



        console.log('connect in room conrt');
    },
    answer: (client) => {
        client.on("answer", () => {
            // emit to all, write to db ...
        })
    },
    startGame: (client) => {
        Rooms.findById(client.id).exec()
            .then((data) => {
                client.broadcast.emit("start-game", data.questions);
            }).catch((err) => {
                console.err(err);
        })
    },
    timer: () => {},
    nextQuestion: () => {},
    endTest: () => {},
    disconnect: () => {}

};