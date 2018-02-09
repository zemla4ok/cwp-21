const Sequelize = require('sequelize');
const config = require('./config.json');

const db = require('./context')(Sequelize, config);
const server = require('./server')(db, config);


//TODO: enter db name to config.json