const express = require('express');

module.exports = (
    officesService,
    agentsServices,
    //services
    config
) => {
    const router = express.Router();

    const officeController = require('./offices')(
        officesService
    );

    const agentsController = require('./agents')(
        agentsServices
    );
    //other controllers

    router.use('/office', officeController);
    router.use('/agent', agentsController);
    //other routers

    return router;
};