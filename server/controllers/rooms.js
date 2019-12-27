const Rooms = require('../models/rooms');
const createToken = require('./createToken');

const controller = {
    create(req, res, next){
        Rooms.create({
            gameID: req.body.gameID,
            players: req.body.players.map((playersObj, index) => {
                return {
                    name: playersObj.name,
                    points: playersObj.points
                }
            })
    })
    .then((rooms) => {
            req.data = rooms._doc;
        next();
    })
    .catch((e) => {
            let err = new Error(e.message);
        next(err)
    })
    },
    readAll(req, res, next){
        Rooms.find({}).exec()
            .then((rooms) => {
            req.data = rooms;
        next()
    })
    .catch((e) => {
            next(e)
        })
    },
    readOne(req, res,next){
        Rooms.findById(req.params.id)
            .then((rooms) => {
                req.data = rooms;
                next();
            })
    .catch((e) => {
            next(e)
        })
    },
    update(req, res, next){
        Rooms.findByIdAndUpdate(req.params.id, {
            id: req.body.id,
            gameID: req.body.gameID,
            players: req.body.players.map((playersObj, index) => {
                return {
                    name: playersObj.name,
                    points: playersObj.points
                }
        })})
            .then((games) => {
            req.data = games;
        next();
    })
    .catch((e) => {
            next(e)
        })
    },
    delete(req, res, next){
        Games.findByIdAndRemove(req.params.id)
            .then((games) => {
            req.data = games;
        next();
    })
    .catch((e) => {
            next(e)
        })
    },

    check(req, res, next){
        Rooms.find({}).exec()
            .then((rooms) => {
                if ( rooms.map((room) => {
                    if(room.gameID === req.body.pinCode){
                        req.data = {roomID: room._id.toJSON() };
                    }
                    return room.gameID
                }).includes(req.body.pinCode) ){
                    next()
                } else {
                    const err = new Error('not found')
                    err.status = 404;
                    next(err)
                }

                // rooms.forEach((room) => {
                //     if(req.body.pinCode === room.gameID){
                //         next()
                //     } else {
                //         debugger
                //     }
                // })

            })
            .catch((e) => {
                next(e)
            })
    }

};
module.exports = controller;