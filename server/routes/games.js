const prepareBody = require('../controllers/prepareBody');
const controller = require('../controllers/games');
const route = require('express').Router();



route.get('/', controller.readAll, prepareBody, (req, res) => {
    res.json(req.responseData);
});

route.get('/:id/', controller.readOne, prepareBody, (req, res) => {
    res.json(req.responseData);
});

route.post('/', controller.create, prepareBody, (req, res) => {
    res.json(req.responseData);
});

route.put('/:id/', controller.update, prepareBody, (req, res) => {
    res.json(req.responseData);
});

route.delete('/:id/', controller.delete, prepareBody, (req, res) => {
    res.json(req.responseData);
});




module.exports = route;