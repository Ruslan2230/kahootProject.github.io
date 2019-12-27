const Users = require('../models/users');

const controller = {
    create(req, res, next){
      Users.create({
          login: req.body.login,
          password: req.body.password,
          email: req.body.email,
          avatar: req.body.avatar,
          isAdmin: req.body.isAdmin
      })
          .then((user) => {
              req.data = user._doc;
              next();
          })
          .catch((e) => {
              let err = new Error(e.message);
              next(err)
          })
    },
    readAll(req, res, next){
        Users.find({}).exec()
            .then((users) => {
                req.data = users;
                next()
            })
            .catch((e) => {
                next(e)
            })
    },
    readOne(req, res,next){
        Users.findById(req.params.id)
            .then((user) => {
                req.data = user;
                next();
            })
            .catch((e) => {
                next(e)
            })
    },
    update(req, res, next){
        Users.findByIdAndUpdate(req.params.id, {
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
            avatar: req.body.avatar,
            isAdmin: req.body.isAdmin
        })
            .then((user) => {
                req.data = user;
                next();
            })
            .catch((e) => {
                next(e)
            })
    },
    delete(req, res, next){
        Users.findByIdAndRemove(req.params.id)
            .then((user) => {
                req.data = user;
                next();
            })
            .catch((e) => {
                next(e)
            })
    }

};
module.exports = controller;