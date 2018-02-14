const CrudController = require('./crud');

class AgentsService extends CrudController {
    constructor(officeService) {
        super(officeService);

        this.deBindFromOffice = this.deBindFromOffice.bind(this);

        this.routes['/debind'] = [{method: 'post', cb: this.deBindFromOffice}];
        
        this.registerRoutes();
    }

    async deBindFromOffice(req, res){


        
    }
}

module.exports = (agentsService) => {
    const controller = new AgentsService(
        agentsService
    );

    return controller.router;
}