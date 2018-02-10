const Sequelize = require('sequelize');
const config = require('./config.json');

const db = require('./context')(Sequelize, config);
//const server = require('./server')(db, config);

(async function() {
    await db.sequelize.sync();
})();
