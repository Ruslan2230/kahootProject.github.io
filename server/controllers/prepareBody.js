const prepareBody = (req, res, next) => {
    req.responseData = {
        status: 200,
        data: req.data,
        errors: [],
        warnings: []
    };
    next();
};
module.exports = prepareBody;