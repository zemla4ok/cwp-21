const CrudController = require('./crud');

class AgentsService extends CrudController {
    constructor(officeService) {
        super(officeService);

        this.deBindFromOffice = this.deBindFromOffice.bind(this);
        this.bindToOffice = this.bindToOffice.bind(this);

        this.routes['/debind'] = [{method: 'post', cb: this.deBindFromOffice}];
        this.routes['/bind'] = [{method: 'post', cb: this.bindToOffice}];

        this.registerRoutes();
    }

    async deBindFromOffice(req, res){
        const result = await this.service.deBindFromOffice(req.body);

        res.json(result);
    }

    async bindToOffice(req, res){
        const result = await this.service.bindToOffice(req.body);

        res.json(result);
    }
}

module.exports = (agentsService) => {
    const controller = new AgentsService(
        agentsService
    );

    return controller.router;
}