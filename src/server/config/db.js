"use strict";

let mongoose = require("mongoose");
mongoose.Promise = Promise;

class Db {
    constructor() {
        this.mongoose = mongoose;
        this.url = process.env.MONGODB || "mongodb://localhost:27017/techodb";
    }

    connect() {
        this.mongoose.connect(this.url)
            .then(() => {
                console.log("Successfuly connected")
            })
            .catch(() => {
                console.log("Failed to connect to DB");
                this.connect();
            });
    }
}

module.exports = new Db();
