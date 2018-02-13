const CrudService = require('./crud');
const validator = require('../helpers/validation');

class AgentsService extends CrudService {
    async create(data) {
        const validationResult = validator.check('agent', data);
        
        if(validationResult.error){
            return {code: 400, message: 'validation error'};
        }
        else{
            return super.create(data);
        }
    }

}

module.exports = AgentsService;