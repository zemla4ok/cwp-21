const CrudController = require('./crud');

class AgentsService extends CrudController {
    constructor(officeService) {
        super(officeService);


        
        this.registerRoutes();
    }


}

module.exports = (agentsService) => {
    const controller = new AgentsService(
        agentsService
    );

    return controller.router;
}