const CrudController = require('./crud');

class OfficeController extends CrudController {
    constructor(officeService) {
        super(officeService);

        this.readAgents = this.readAgents.bind(this);

        this.routes['/agents'] = [{method: 'get', cb: this.readAgents}];
        
        this.registerRoutes();
    }

    async readAgents(req, res) {
        const agents = await this.service.readAgents();

        res.json(agents);
    }
}

module.exports = (usersService) => {
    const controller = new OfficeController(
        usersService
    );

    return controller.router;
}