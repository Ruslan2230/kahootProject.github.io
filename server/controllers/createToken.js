const jwt = require("jsonwebtoken");
const KEY = "secret";

const createToken = (req, res, next) => {
    jwt.sign({
        // info: req.info.token
        }, KEY, {
            expiresIn: 180
        }, (err, token) => {
            req.data = Object.assign(req.data, {token,
                status: 200
            });
            next()
    })
}

module.exports = createToken;
