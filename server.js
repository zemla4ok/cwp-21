const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

const errors = require('./helpers/error');
//services
const OfficesServices = require('./services/offices');
const AgentsServices = require('./services/agents');
const PropertiesServices = require('./services/properties');
const LoggerService = require('./services/logger');
const CacheService = require('./services/cache');

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
    const cacheService = new CacheService();

    //controllers
    const logger = require('./global-controllers/logger')(loggerService);
    const cache = require('./global-controllers/cache')(cacheService, loggerService);
    const error = require('./global-controllers/error');
    const apiController = require('./controllers/api')(
        officesService,
        agentsServices,
        propertiesServices,
        cacheService,
        config
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/api', logger);
    app.use('/api', cache);
    app.use('/api', apiController);
    app.use('/api', error);
    return app;
};
