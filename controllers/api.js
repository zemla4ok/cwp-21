const express = require('express');

module.exports = (
    officesService,
    //services
    config
) => {
    const router = express.Router();

    const officeController = require('./offices')(
        officesService
    );

    //other controllers

    router.use('/office', officeController);
    //other routers

    return router;
};