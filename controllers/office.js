const CrudController = require('./crud');

class OfficeController extends CrudController {
    constructor(officeService) {
        super(officeService);

        
        
        this.registerRoutes();
    }

    
}

module.exports = (usersService) => {
    const controller = new OfficeController(
        usersService
    );

    return controller.router;
}