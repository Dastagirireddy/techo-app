'use strict';
let CarModel = require('../models/car');

class Car {
    constructor() {}

    getCars(req, res, next) {

        CarModel.find({})
            .then((data) => {
                res.json(data);
            })
            .catch(() => {
                res.statusCode = 400;
                res.end();
            });
    }
}

module.exports = new Car();
