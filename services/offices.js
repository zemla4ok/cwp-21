const CrudService = require('./crud');
const validator = require('../helpers/validation');

class OfficesService extends CrudService {
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

    async readAgents() {
        
    }
}

module.exports = OfficesService;