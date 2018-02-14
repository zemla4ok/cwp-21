const CrudService = require('./crud');
const validator = require('../helpers/validation');

class AgentsService extends CrudService {
    constructor(repository){
        super(repository);
    }

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
        if(data.id != undefined && data.newOfficeId != undefined){
            const id = parseInt(data. id);
            const officeID = parseInt(data.newOfficeId);

            return super.update(
                id,
                {officeId: officeID}
            )
        }
        //error
    }

    async update(id, data){
        const validationResultData = validator.check('agentUpd', data);

        if(validationResultData.error){
            return {code: 400, message: 'validation error'};            
        }
        else{
            return super.update(id, data);            
        }
    }
}

module.exports = AgentsService;