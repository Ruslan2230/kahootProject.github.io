const route = require('express').Router();
const usersModel = require("../models/users");
const {verify} = require('../controllers/verify');
const jwt = require("jsonwebtoken");
const KEY = "secret";


route.post("/", (req, res, next) => {
    const {login, password} = req.body;
    usersModel.findOne({ login }).exec()
        .then((user) => {
            if(user === null){
                let e = new Error("Not Found");
                e.status = 404;
                next(e);
            }
            if(user.password === password){
                jwt.sign({
                    login: user.login
                }, KEY, {
                    expiresIn: 180
                }, (err, token) => {
                    res.json({
                        token
                    })
                });
            } else {
                let e = new Error("Invalid password");
                e.status = 400;
                next(e);
            }
        })
        .catch((e) => {
            e.status = 400;
            next(e);
        })
});

route.get("/:login/", verify, (req, res, next) => {
    const {login} = req.params;
    if(req.tokenInfo.login !== login){
        const err = new Error("Invalid login");
        err.status = 403;
        next(err);
    }
    usersModel.findOne({ login: login }).exec()
        .then((user) => {
            const {login, secret, id} = user;
            res.json({
                login,
                secret,
                id
            })
        })
        .catch((e) => {
            e.status = 400;
            next(e);
        })
});

module.exports = route;