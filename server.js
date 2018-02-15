const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

const errors = require('./helpers/error');
//services
const OfficesServices = require('./services/offices');
const AgentsServices = require('./services/agents');
const PropertiesServices = require('./services/properties');
const LoggerService = require('./services/logger');

module.exports = (db, config) => {
    const app = express();
    //services
    const officesService = new OfficesServices(
        db.offices,
        errors
    );
    const agentsServices = new AgentsServices(
        db.agents,
        errors
    );
    const propertiesServices = new PropertiesServices(
        db.properties,
        errors
    );
    const loggerService = new LoggerService(); 

    //controllers
    const logger = require('./global-controllers/logger')(loggerService);
    const error = require('./global-controllers/error');
    const apiController = require('./controllers/api')(
        officesService,
        agentsServices,
        propertiesServices,
        config
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/api', logger);
    app.use('/api', apiController);
    app.use('/api', error);
    return app;
};
