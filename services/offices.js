const CrudService = require('./crud');
const validator = require('../helpers/validation');

class OfficesService extends CrudService {
    constructor(repository) {
        super(repository);
    }

    async create(data) {
        const validationResult = validator.check('office', data);
        
        if(validationResult.error){
            return {code: 400, message: 'validation error'};
        }
        else{
            return super.create(data);
        }
    }

    async update(id, data) {
        const validationResultData = validator.check('officeUpd', data);

        if(validationResultData.error){
            return {code: 400, message: 'validation error'};            
        }
        else{
            return super.update(id, data);            
        }
    }

    async readAgents(id) {
        const office = await this.read(id);

        if(!office){
            return {code: 400, message: 'no office'};
        }

        return await office.getAgents();
    }
}

module.exports = OfficesService;