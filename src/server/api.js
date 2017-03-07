'use strict';
let express = require('express');
let Router = express.Router;
let car = require('./cars/controllers/car');

class Api {
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get('/cars', car.getCars.bind(express));
    }
}

module.exports = new Api().router;
