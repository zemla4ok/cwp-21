const CrudService = require('./crud');
const validator = require('../helpers/validation');

class PropertiesService extends CrudService {
    constructor(repository){
        super(repository);
    }

    async create(data){
        const validRes = validator.check('property', data);

        if(validRes.error){
            return {code: 400, message: 'validation error'};
        }
        else{
            return super.create(data);
        }
    }

    async update(id, data){
        const validationResultData = validator.check('propertyUpd', data);

        if(validationResultData.error){
            return {code: 400, message: 'validation error'};            
        }
        else{
            return super.update(id, data);            
        }
    }

    async deBindFromAgent(data){
        if(data.id != undefined){
            const id = parseInt(data.id);

            return super.update(
                id,
                {agentId: null}
            )
        }
        //error id
    }

    async bindToAgent(data){
        if(data.id != undefined && data.newAgentId != undefined){
            const id = parseInt(data. id);
            const agentID = parseInt(data.newAgentId);

            return super.update(
                id,
                {agentId: agentID}
            )
        }
        //error
    }
}

module.exports = PropertiesService;