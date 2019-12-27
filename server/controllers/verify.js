// const route = require("express").Router();
const jwt = require("jsonwebtoken");
const KEY = "secret";
// const usersModel = require("../models/users");

const verify = (req, res, next) => {
    const token = req.query.token || req.body.token || req.headers.token;
    if(!token){
        let err = new Error("Please send token");
        err.status = 401;
        next(err);
    }
    jwt.verify(token, KEY, (err, decode) => {
        if(err) {
            err.status = 403;
            next(err);
        }
        req.tokenInfo = decode;
        next();
    })
};

// route.post("/", (req, res, next) => {
//     const {login, password, name} = req.body;
//     usersModel.create({
//         login,
//         password,
//         name
//     })
//         .then((user) => {
//             // const {password, ...data} = user.toJSON();
//             const {id, login, name} = user;
//             res.json({
//                 id,
//                 login,
//                 name
//             });
//         })
//         .catch((e) => {
//             e.status = 400;
//             next(e)
//         })
// });
// route.post("/auth/", (req, res, next) => {
//     const {login, password} = req.body;
//     usersModel.findOne({ login }).exec()
//         .then((user) => {
//             if(user === null){
//                 let e = new Error("Not Found");
//                 e.status = 404;
//                 next(e);
//             }
//             if(user.password === password){
//                 jwt.sign({
//                     login: user.login
//                 }, KEY, {
//                     expiresIn: 180
//                 }, (err, token) => {
//                     res.json({
//                         token
//                     })
//                 });
//             } else {
//                 let e = new Error("Invalid password");
//                 e.status = 400;
//                 next(e);
//             }
//
//         })
//         .catch((e) => {
//             e.status = 400;
//             next(e);
//         })
// });
// route.get("/:name/", verify, (req, res, next) => {
//     const {name} = req.params;
//     if(req.tokenInfo.login !== name){
//         const err = new Error("Invalid login");
//         err.status = 403;
//         next(err);
//     }
//     usersModel.findOne({ login: name }).exec()
//         .then((user) => {
//             const {login, secret, id} = user;
//             res.json({
//                 login,
//                 secret,
//                 id
//             })
//         })
//         .catch((e) => {
//             e.status = 400;
//             next(e);
//         })
// })

module.exports = {verify};
// module.exports = route;