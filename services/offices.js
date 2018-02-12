const CrudService = require('./crud');
const validator = require('./validation');

const oficeKey = 'office';

class OfficesService extends CrudService {
    async create(data) {
        const validationResult = validator.check(officeKey, data);
        
        if(validationResult.error){
            return {code: 400, message: 'validation error'};
        }
        else{
            return super.create(data);
        }
    }
}

module.exports = OfficesService;