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

    async deBindFromOffice(data){
        if(data.id != undefined){
            const id = parseInt(data.id);

            return super.update(
                id,
                {officeId: null}
            )
        }
        //error id
    }

    async bindToOffice(data){
        if(data.id != undefined && data.newOfficeId){
            const id = parseInt(data. id);
            const officeID = parseInt(data.newOfficeId);

            return super.update(
                id,
                {officeId: officeID}
            )
        }
        //error
    }
}

module.exports = AgentsService;