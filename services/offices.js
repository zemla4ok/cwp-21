const CrudService = require('./crud');
const validator = require('../helpers/validation');

class OfficesService extends CrudService {
    async create(data) {
        console.log('it is working');
        const validationResult = validator.check('office', data);
        
        if(validationResult.error){
            return {code: 400, message: 'validation error'};
        }
        else{
            return super.create(data);
        }
    }
}

module.exports = OfficesService;