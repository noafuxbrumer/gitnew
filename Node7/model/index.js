const dotenv = require('dotenv');

dotenv.config();


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
console.log(process.env.URL);
db.mongoose = mongoose;
db.URL = process.env.URL;
db.workers = require("./workersData.js")(mongoose);
db.dishe= require("./dishesData.js")(mongoose);
db.clients = require("./clientsData.js")(mongoose);



module.exports = db;