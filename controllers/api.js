const express = require('express');

module.exports = (
    officesService,
    //services
    config
) => {
    const router = express.Router();

    const officeController = require('./office')(
        officesService
    );

    //other controllers

    router.use('/office', officeController);
    //other routers

    return router;
};