const express = require('express');

module.exports = (
    officesService,
    agentsServices,
    propertiesServices,
    config
) => {
    const router = express.Router();

    const officeController = require('./offices')(
        officesService
    );

    const agentsController = require('./agents')(
        agentsServices
    );
    
    const propertiesController = require('./properties')(
        propertiesServices
    );

    router.use('/office', officeController);
    router.use('/agent', agentsController);
    router.use('/property', propertiesController);

    return router;
};