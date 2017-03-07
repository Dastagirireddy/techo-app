"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let CarSchema = new Schema({
    name: String,
    models: Array
});

let CarModel = mongoose.model("Car", CarSchema);

module.exports = CarModel;
