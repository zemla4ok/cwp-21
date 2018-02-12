const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParse = require('body-parser');

//services
const OfficesServices = require('./services/offices');
//const AgentsServices = require('./services/agents');
//const PropertiesServices = require('./services/properties');

module.exports = (db, config) => {
    const app = express();

    const officesService = new OfficesServices(
        db.offices,
        errors
    );
/*
    const agentsServices = new AgentsServices(
        db.agents,
        errors
    );

    const agentsServices = new PropertiesServices(
        db.properties,
        errors
    );*/

    const apiController = require('./controllers/api')(
        officesService,
    //    agentsServices,
    //    agentsServices,
        config
    );

    //Mounting
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(bodyParse.json());

    app.use('/api', apiController);
};
