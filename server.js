'use strict';

process.env.ROOT = __dirname;

let app = require('./src/server/app');
let db = require('./src/server/config/db');

class Server {
    constructor() {
        this.app = app;
        this.db = db;
        this.port = process.env.PORT || 3000;
        this.run();
    }

    run() {
        this.app.listen(this.port, () => {

            console.log(`App running at ${this.port}`);
            this.db.connect();
        });
    }
}

new Server();
